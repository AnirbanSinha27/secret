import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import HeartCursorTrail from "@/components/HeartCursorTrail";
import RunawayButton from "@/components/RunawayButton";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const navigate = useNavigate();
  const [yesScale, setYesScale] = useState(1);

  const handleYes = () => {
    navigate("/thankyou");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4">
      <FloatingHearts />
      <HeartCursorTrail />
      <MusicPlayer src="https://www.bensound.com/bensound-music/bensound-love.mp3" />

      <div className="animate-page-enter z-10 flex flex-col items-center gap-6 max-w-lg text-center">
        {/* Cute GIF */}
        <div className="relative">
          <img
            src="https://media.tenor.com/hIkMm_9EWTQAAAAC/milk-and-mocha.gif"
            alt="Milk and Mocha bears hugging"
            className="w-56 h-56 object-cover rounded-3xl shadow-lg border-4 border-valentine-rose/30"
          />
          <span className="absolute -top-3 -right-3 text-3xl animate-bounce-gentle">💝</span>
          <span className="absolute -bottom-2 -left-3 text-2xl animate-bounce-gentle" style={{ animationDelay: "0.5s" }}>✨</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-display text-primary leading-tight">
          Will You Be My Valentine?
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-md">
          Every moment with you feels like a fairytale. You make my heart skip a beat, and I can't imagine this day without you by my side 💕
        </p>

        {/* Cute cat GIF */}
        <img
          src="https://media.tenor.com/WkGOBu6MacYAAAAC/love-cat.gif"
          alt="Cute cat with hearts"
          className="w-32 h-32 object-cover rounded-2xl shadow-md"
        />

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <button
            onClick={handleYes}
            onMouseEnter={() => setYesScale((s) => Math.min(s + 0.1, 1.8))}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-bold text-xl shadow-lg animate-pulse-glow transition-transform duration-300"
            style={{ transform: `scale(${yesScale})` }}
          >
            Yes! 💖
          </button>
          <RunawayButton>No 😢</RunawayButton>
        </div>

        <p className="text-sm text-muted-foreground/60 mt-2 font-body italic">
          (psst... the No button is shy 🙈)
        </p>
      </div>
    </div>
  );
};

export default Index;
