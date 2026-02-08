import { useState, useCallback, useEffect } from "react";

const Confetti = ({ active }: { active: boolean }) => {
  const [pieces, setPieces] = useState<Array<{
    id: number;
    left: string;
    color: string;
    size: string;
    duration: string;
    delay: string;
    shape: string;
  }>>([]);

  const generateConfetti = useCallback(() => {
    const colors = [
      "hsl(340, 82%, 52%)",
      "hsl(350, 80%, 65%)",
      "hsl(0, 75%, 50%)",
      "hsl(40, 90%, 55%)",
      "hsl(280, 60%, 80%)",
      "hsl(350, 100%, 95%)",
    ];
    const shapes = ["❤️", "💖", "🌹", "✨", "💝", "🩷", "🎀"];
    
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: `${Math.random() * 16 + 10}px`,
      duration: `${Math.random() * 2 + 2}s`,
      delay: `${Math.random() * 1.5}s`,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
  }, []);

  useEffect(() => {
    if (active) {
      setPieces(generateConfetti());
      const timer = setTimeout(() => setPieces([]), 4000);
      return () => clearTimeout(timer);
    }
  }, [active, generateConfetti]);

  if (!active || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            fontSize: piece.size,
            animationDuration: piece.duration,
            animationDelay: piece.delay,
          }}
        >
          {piece.shape}
        </span>
      ))}
    </div>
  );
};

export default Confetti;
