import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 4500;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        background: "linear-gradient(135deg, hsl(217 72% 15%), hsl(217 72% 22%), hsl(217 60% 30%))",
        opacity: progress >= 100 ? 0 : 1,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
             style={{ background: "hsl(45 90% 55%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
             style={{ background: "hsl(217 80% 50%)", animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <div className="text-center">
          <p className="font-mono-tag text-[11px] tracking-[0.4em] uppercase text-gold mb-4">
            École Chrétienne
          </p>
          <h1 className="font-fraunces text-5xl md:text-7xl text-primary-foreground italic font-light">
            Sola Gratia<span className="text-gold">.</span>
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="font-mono-tag text-[11px] tracking-[0.3em] uppercase text-primary-foreground/70 animate-pulse">
            Chargement
          </span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        </div>

        <div className="w-72 md:w-96">
          <div className="h-[2px] w-full bg-primary-foreground/15 overflow-hidden">
            <div
              className="h-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, hsl(40 85% 40%), hsl(45 90% 55%), hsl(45 85% 70%))",
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 font-mono-tag text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
            <span>{Math.floor(progress)}%</span>
            <span>Excellence · Foi · Savoir</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
