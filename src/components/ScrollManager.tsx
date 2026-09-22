import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollManager = () => {
  const { pathname, search, hash } = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

    const positionPage = () => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ block: "start" });
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    positionPage();
    const frame = window.requestAnimationFrame(positionPage);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, search, hash]);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = available > 0 ? Math.min(1, window.scrollY / available) : 0;
      setProgress(nextProgress);
      setVisible(window.scrollY > 160);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return visible ? (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full border border-border bg-background shadow-editorial md:bottom-7 md:right-7"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retourner en haut de la page"
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r="25" fill="none" strokeWidth="3" className="stroke-border" />
        <circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
          className="stroke-primary"
        />
      </svg>
      <ArrowUp className="relative h-5 w-5 text-primary" />
    </Button>
  ) : null;
};

export default ScrollManager;