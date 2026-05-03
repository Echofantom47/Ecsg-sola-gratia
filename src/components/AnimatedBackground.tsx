const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(217 60% 96%) 0%, hsl(217 50% 92%) 40%, hsl(45 50% 95%) 100%)",
        }}
      />
      {/* Animated blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-blob-slow"
           style={{ background: "radial-gradient(circle, hsl(217 80% 60%), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-25 animate-blob-slower"
           style={{ background: "radial-gradient(circle, hsl(217 72% 35%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob-slow"
           style={{ background: "radial-gradient(circle, hsl(45 90% 55%), transparent 70%)", animationDelay: "3s" }} />
    </div>
  );
};

export default AnimatedBackground;
