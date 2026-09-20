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
        background: "hsl(var(--primary))",
        opacity: progress >= 100 ? 0 : 1,
      }}
    >
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <div className="text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/65">
            École Chrétienne
          </p>
          <h1 className="font-display text-5xl font-semibold text-primary-foreground md:text-7xl">
            Sola Gratia
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="font-mono-tag text-[11px] tracking-[0.3em] uppercase text-primary-foreground/70 animate-pulse">
            Chargement
          </span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-bounce" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        </div>

        <div className="w-72 md:w-96">
          <div className="h-[2px] w-full bg-primary-foreground/15 overflow-hidden">
            <div
              className="h-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: "hsl(var(--primary-foreground))",
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
