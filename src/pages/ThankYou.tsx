import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import HeartCursorTrail from "@/components/HeartCursorTrail";
import Confetti from "@/components/Confetti";
import MusicPlayer from "@/components/MusicPlayer";

const ThankYou = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4">
      <FloatingHearts />
      <HeartCursorTrail />
      <Confetti active={showConfetti} />
      <MusicPlayer src="/music/paglu.mp3" />

      <div className="animate-page-enter z-10 flex flex-col items-center gap-6 max-w-lg text-center">
        {/* Cute GIF */}
        <img
          src="https://imgs.search.brave.com/EQh4DpxOXNe8sYLYqauF9xTlkYeTH1z5bVRdD6ixAs0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvbWlsay1h/bmQtbW9jaGEtbGVh/bmluZy1jbnBmN2ti/NHd6NnZlNm90Lmdp/Zg.gif"
          alt="Milk and Mocha celebrating"
          className="w-60 h-60 object-cover rounded-3xl shadow-lg border-4 border-valentine-rose/30"
        />

        <div className="space-y-3">
          <span className="text-5xl">🎉💕🎉</span>
          <h1 className="text-5xl md:text-7xl font-display text-primary leading-tight">
            Thank You!
          </h1>
          <h2 className="text-3xl md:text-4xl font-display text-valentine-rose">
            Happy Valentine's Day Jaana! 💝
          </h2>
        </div>

        <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-md">
          You just made me the happiest person in the world! I have some special surprises waiting for you... are you ready? 🥰
        </p>

        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJkN3pnZmx2OXlmN3B3ODM0OGVuZWI1YW16dXVhYnhlbW5ucjVxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y93x7gLXTO5dnSWCEI/giphy.gif"
          alt="Cute happy celebration"
          className="w-36 h-36 object-cover rounded-2xl shadow-md"
        />

        <button
          onClick={() => navigate("/gifts")}
          className="mt-4 px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-bold text-xl shadow-lg animate-pulse-glow hover:scale-105 transition-transform duration-300"
        >
          See Your Gifts 🎁
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
