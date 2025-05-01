import { useEffect, useState } from "react";

const CanvasOff = () => {
  const [gradientPos, setGradientPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 overflow-hidden rounded-2xl shadow-lg">
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(135deg, hsl(${gradientPos}, 80%, 60%), hsl(${(gradientPos + 60) % 360}, 80%, 60%))`,
        }}
      />
      {/* sparkle effect overlay */}
      <div className="absolute inset-0 bg-[url('https://www.svgrepo.com/show/323309/sparkles.svg')] bg-cover bg-center opacity-20 animate-pulse pointer-events-none" />
      
      {/* optional content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-white text-3xl font-bold drop-shadow-md animate-fade-in-up">
          Canvas Off Mode
        </h2>
      </div>
    </div>
  );
};

export default CanvasOff;
