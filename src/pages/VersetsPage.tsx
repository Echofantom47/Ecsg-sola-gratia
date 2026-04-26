import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, Loader2, ChevronRight, ArrowLeft, Sparkles, Quote, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";

type BookIndex = {
  name: string;
  slug: string;
  chapters: number;
  verses: number;
  testament: "AT" | "NT";
};

type BookData = {
  name: string;
  slug: string;
  chapters: Record<string, Record<string, string>>;
};

type SearchHit = {
  book: string;
  slug: string;
  chapter: number;
  verse: number;
  text: string;
  score: number;
};

const VERSETS_PHARES = [
  { ref: "Jean 3:16", slug: "evangile-selon-saint-jean", c: 3, v: 16 },
  { ref: "Psaume 23:1", slug: "les-psaumes", c: 23, v: 1 },
  { ref: "Proverbes 3:5", slug: "les-proverbes", c: 3, v: 5 },
  { ref: "Philippiens 4:13", slug: "epitre-aux-philippiens", c: 4, v: 13 },
  { ref: "Romains 8:28", slug: "epitre-aux-romains", c: 8, v: 28 },
  { ref: "Jérémie 29:11", slug: "jeremie", c: 29, v: 11 },
  { ref: "Esaïe 41:10", slug: "esaie", c: 41, v: 10 },
  { ref: "Matthieu 11:28", slug: "evangile-selon-saint-matthieu", c: 11, v: 28 },
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const VersetsPage = () => {
  const [index, setIndex] = useState<BookIndex[]>([]);
  const [loadingIdx, setLoadingIdx] = useState(true);

  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [searching, setSearching] = useState(false);

  const [selected, setSelected] = useState<{ slug: string; chapter: number } | null>(null);
  const [bookCache, setBookCache] = useState<Record<string, BookData>>({});
  const [loadingBook, setLoadingBook] = useState(false);
  const [bookFilter, setBookFilter] = useState<"all" | "AT" | "NT">("all");

  const cacheRef = useRef<Record<string, BookData>>({});

  // Load index
  useEffect(() => {
    fetch("/bible/index.json")
      .then((r) => r.json())
      .then(setIndex)
      .finally(() => setLoadingIdx(false));
  }, []);

  // Debounce search
  useEffect(() => {
    const id = setTimeout(() => setDebounced(query.trim()), 220);
    return () => clearTimeout(id);
  }, [query]);

  // Run search across all books (lazy load each book's JSON, then cache)
  useEffect(() => {
    if (!debounced || debounced.length < 2 || index.length === 0) {
      setHits([]);
      return;
    }
    let cancelled = false;
    setSearching(true);

    const q = normalize(debounced);
    const tokens = q.split(" ").filter(Boolean);

    (async () => {
      const allHits: SearchHit[] = [];
      const MAX = 80;

      // Iterate books, stop early if we have plenty
      for (const b of index) {
        if (cancelled) return;
        let data = cacheRef.current[b.slug];
        if (!data) {
          try {
            const res = await fetch(`/bible/${b.slug}.json`);
            data = await res.json();
            cacheRef.current[b.slug] = data;
          } catch {
            continue;
          }
        }
        for (const [cnum, verses] of Object.entries(data.chapters)) {
          for (const [vnum, text] of Object.entries(verses)) {
            const hay = normalize(text);
            let score = 0;
            if (hay.includes(q)) score += 10;
            for (const t of tokens) if (t.length > 2 && hay.includes(t)) score += 1;
            if (score > 0) {
              allHits.push({
                book: data.name,
                slug: data.slug,
                chapter: Number(cnum),
                verse: Number(vnum),
                text,
                score,
              });
              if (allHits.length >= MAX * 4) break;
            }
          }
        }
        if (allHits.length >= MAX * 2) break;
      }

      if (cancelled) return;
      allHits.sort((a, b) => b.score - a.score);
      setHits(allHits.slice(0, MAX));
      setBookCache({ ...cacheRef.current });
      setSearching(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [debounced, index]);

  // Load chapter when selected
  useEffect(() => {
    if (!selected) return;
    const { slug } = selected;
    if (cacheRef.current[slug]) {
      setBookCache({ ...cacheRef.current });
      return;
    }
    setLoadingBook(true);
    fetch(`/bible/${slug}.json`)
      .then((r) => r.json())
      .then((data: BookData) => {
        cacheRef.current[slug] = data;
        setBookCache({ ...cacheRef.current });
      })
      .finally(() => setLoadingBook(false));
  }, [selected]);

  const filteredIndex = useMemo(
    () => (bookFilter === "all" ? index : index.filter((b) => b.testament === bookFilter)),
    [index, bookFilter],
  );

  const currentBook = selected ? bookCache[selected.slug] : null;
  const currentChapter =
    currentBook && selected ? currentBook.chapters[String(selected.chapter)] : null;

  const highlight = (text: string) => {
    if (!debounced || debounced.length < 2) return text;
    try {
      const safe = debounced.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(${safe})`, "ig");
      return text.split(re).map((part, i) =>
        re.test(part) ? (
          <mark
            key={i}
            className="bg-gold/30 text-foreground rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      );
    } catch {
      return text;
    }
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-30" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-royal-blue/40 blur-3xl" />

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-gold text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Bible — Louis Segond 1910
            </span>

            <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-bold mt-6 leading-[0.95]">
              La Parole
              <br />
              <span className="text-gradient-gold italic">de Dieu</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
              Plus de <strong className="text-gold">26 000 versets</strong> à explorer.
              Cherchez un mot, une référence ou un thème — la Parole vous répond.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-10 relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                {searching ? (
                  <Loader2 className="w-5 h-5 text-gold animate-spin" />
                ) : (
                  <Search className="w-5 h-5 text-gold" />
                )}
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Cherchez un verset… ex: "amour", "Jean 3:16", "berger"'
                className="w-full pl-14 pr-12 py-5 rounded-full bg-primary-foreground text-foreground text-base md:text-lg shadow-mega focus:outline-none focus:ring-4 focus:ring-gold/40 placeholder:text-muted-foreground"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-muted-foreground hover:text-foreground"
                  aria-label="Effacer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Suggestions */}
            {!query && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs uppercase tracking-widest text-primary-foreground/60 mr-2">
                  Versets phares :
                </span>
                {VERSETS_PHARES.slice(0, 6).map((v) => (
                  <button
                    key={v.ref}
                    onClick={() => setSelected({ slug: v.slug, chapter: v.c })}
                    className="px-3 py-1.5 rounded-full glass-dark text-xs text-primary-foreground/90 hover:text-gold hover:border-gold/50 transition-colors"
                  >
                    {v.ref}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* RESULTS / BROWSER */}
      <section className="container mx-auto px-4 py-16">
        {/* SEARCH RESULTS */}
        {debounced && debounced.length >= 2 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif-display text-2xl md:text-3xl font-semibold">
                {searching ? "Recherche en cours…" : `${hits.length} résultat${hits.length > 1 ? "s" : ""}`}
                <span className="text-muted-foreground font-body text-base ml-2">
                  pour <em>« {debounced} »</em>
                </span>
              </h2>
            </div>

            {!searching && hits.length === 0 && (
              <div className="text-center py-12 bg-muted/30 rounded-2xl">
                <p className="text-muted-foreground">
                  Aucun verset trouvé. Essayez un autre mot-clé 🙏
                </p>
              </div>
            )}

            <div className="space-y-3">
              {hits.map((h, i) => (
                <motion.button
                  key={`${h.slug}-${h.chapter}-${h.verse}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.3) }}
                  onClick={() => setSelected({ slug: h.slug, chapter: h.chapter })}
                  className="w-full text-left p-5 bg-card rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                      {h.book} {h.chapter}:{h.verse}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-foreground/90 font-serif-display text-lg leading-relaxed">
                    {highlight(h.text)}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* BOOK BROWSER */}
        {!debounced && (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif-display text-3xl md:text-5xl font-bold">
                  Parcourir <span className="text-gradient-gold italic">les Livres</span>
                </h2>
                <p className="text-muted-foreground mt-2">
                  66 livres • 1 189 chapitres • 26 000+ versets
                </p>
              </div>

              <div className="flex gap-2 bg-muted p-1 rounded-full">
                {(["all", "AT", "NT"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setBookFilter(f)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                      bookFilter === f
                        ? "bg-gradient-navy text-primary-foreground shadow-elegant"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f === "all" ? "Tous" : f === "AT" ? "Ancien Test." : "Nouveau Test."}
                  </button>
                ))}
              </div>
            </div>

            {loadingIdx ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filteredIndex.map((b, i) => (
                  <motion.button
                    key={b.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.01, 0.4) }}
                    onClick={() => setSelected({ slug: b.slug, chapter: 1 })}
                    className="group p-4 bg-card rounded-xl border border-border hover:border-gold hover:shadow-gold transition-all text-left"
                  >
                    <BookOpen className="w-5 h-5 text-gold mb-2" />
                    <p className="font-serif-display font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                      {b.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {b.chapters} ch. • {b.verses} v.
                    </p>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* CHAPTER MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/70 backdrop-blur-sm flex items-stretch md:items-center justify-center md:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full md:max-w-3xl md:rounded-2xl shadow-mega flex flex-col max-h-screen md:max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-navy text-primary-foreground px-6 py-5 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Retour
                </button>
                <div className="text-center flex-1">
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {currentBook?.name || "Chargement…"}
                  </p>
                  <p className="font-serif-display text-2xl font-bold">
                    Chapitre {selected.chapter}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-primary-foreground/80 hover:text-gold"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chapter selector */}
              {currentBook && (
                <div className="px-4 py-3 border-b border-border overflow-x-auto">
                  <div className="flex gap-1 min-w-max">
                    {Object.keys(currentBook.chapters)
                      .map(Number)
                      .sort((a, b) => a - b)
                      .map((n) => (
                        <button
                          key={n}
                          onClick={() => setSelected({ slug: selected.slug, chapter: n })}
                          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            n === selected.chapter
                              ? "bg-gradient-gold text-primary"
                              : "text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Verses */}
              <div className="overflow-y-auto p-6 md:p-8 flex-1">
                {loadingBook || !currentChapter ? (
                  <div className="flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-gold" />
                  </div>
                ) : (
                  <div className="space-y-3 max-w-2xl mx-auto">
                    <Quote className="w-10 h-10 text-gold/30 mb-2" />
                    {Object.keys(currentChapter)
                      .map(Number)
                      .sort((a, b) => a - b)
                      .map((vnum) => (
                        <p
                          key={vnum}
                          className="font-serif-display text-lg leading-relaxed text-foreground/90"
                        >
                          <sup className="text-gold font-bold mr-1.5 text-xs">{vnum}</sup>
                          {currentChapter[String(vnum)]}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default VersetsPage;
