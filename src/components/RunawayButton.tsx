import { useState, useRef, useCallback } from "react";

interface RunawayButtonProps {
  children: React.ReactNode;
}

const RunawayButton = ({ children }: RunawayButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [runCount, setRunCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const runAway = useCallback(() => {
    const maxX = 200;
    const maxY = 150;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    setPosition({ x: newX, y: newY });
    setRunCount((c) => c + 1);
  }, []);

  const messages = [
    "No 😢",
    "Are you sure? 🥺",
    "Please? 💔",
    "Think again! 😭",
    "Don't do this 🥹",
    "I'll cry 😿",
    "Really? 💀",
    "No way! 🙈",
  ];

  return (
    <button
      ref={buttonRef}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      className="px-8 py-3 rounded-full bg-muted text-muted-foreground font-body font-semibold text-lg transition-all duration-300 hover:cursor-not-allowed"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {messages[runCount % messages.length]}
    </button>
  );
};

export default RunawayButton;
