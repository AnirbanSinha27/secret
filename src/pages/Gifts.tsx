import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeartCursorTrail from "@/components/HeartCursorTrail";
import MusicPlayer from "@/components/MusicPlayer";
import QuizModal from "@/components/QuizModal";
import LetterModal from "@/components/LetterModal";
import PhotoGallery from "@/components/PhotoGallery";
import { Gift, Heart, PenLine, Camera } from "lucide-react";

const Gifts = () => {
  const [activeGift, setActiveGift] = useState<number | null>(null);

  const giftCards = [
    {
      id: 1,
      title: "Love Quiz 💕",
      description: "How well do you know us? Take this cute quiz!",
      icon: Heart,
      gradient: "from-valentine-pink to-valentine-rose",
      emoji: "🧠",
    },
    {
      id: 2,
      title: "Love Letter 💌",
      description: "A special letter written just for you...",
      icon: PenLine,
      gradient: "from-valentine-rose to-valentine-lavender",
      emoji: "💌",
    },
    {
      id: 3,
      title: "Our Memories 📸",
      description: "Our beautiful moments together!",
      icon: Camera,
      gradient: "from-valentine-lavender to-valentine-pink",
      emoji: "📸",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-12">
      <FloatingHearts />
      <HeartCursorTrail />
      <MusicPlayer src="https://www.bensound.com/bensound-music/bensound-love.mp3" />

      <div className="animate-page-enter z-10 flex flex-col items-center gap-8 max-w-4xl w-full text-center">
        <div className="space-y-3">
          <span className="text-4xl">🎁</span>
          <h1 className="text-5xl md:text-6xl font-display text-primary">
            Your Special Gifts
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-md mx-auto">
            I prepared 3 special surprises for you. Open each one! 🥰
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
          {giftCards.map((gift) => (
            <button
              key={gift.id}
              onClick={() => setActiveGift(gift.id)}
              className="group relative hover-wiggle"
            >
              <div className="bg-card border-2 border-border rounded-3xl p-8 flex flex-col items-center gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
                <div className="text-6xl mb-2">{gift.emoji}</div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <gift.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display text-foreground">{gift.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{gift.description}</p>
                <span className="mt-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm group-hover:scale-105 transition-transform">
                  Open Gift 🎀
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      <QuizModal open={activeGift === 1} onClose={() => setActiveGift(null)} />
      <LetterModal open={activeGift === 2} onClose={() => setActiveGift(null)} />
      <PhotoGallery open={activeGift === 3} onClose={() => setActiveGift(null)} />
    </div>
  );
};

export default Gifts;
