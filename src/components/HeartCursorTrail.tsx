import { useEffect, useCallback } from "react";

const HeartCursorTrail = () => {
  const createHeart = useCallback((x: number, y: number) => {
    const heart = document.createElement("span");
    heart.className = "heart-cursor";
    heart.textContent = ["❤️", "💖", "💗", "💘", "✨"][Math.floor(Math.random() * 5)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;
      createHeart(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [createHeart]);

  return null;
};

export default HeartCursorTrail;
