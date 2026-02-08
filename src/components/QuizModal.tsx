import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
}

const quizzes = [
  {
    question: "What's the first thing I noticed about you? 💕",
    options: ["Your smile", "Your eyes", "Your laugh", "Everything!"],
    correct: 3,
  },
  {
    question: "What's our favorite thing to do together? 🥰",
    options: ["Watch movies", "Cook together", "Go on walks", "All of the above!"],
    correct: 3,
  },
  {
    question: "How much do I love you? 💝",
    options: ["A lot", "To the moon and back", "More than pizza", "Infinity x infinity!"],
    correct: 3,
  },
];

const QuizModal = ({ open, onClose }: QuizModalProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    const isCorrect = index === quizzes[currentQ].correct;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentQ < quizzes.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-card border-2 border-primary/20 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display text-primary text-center">
            {finished ? "Results! 🎉" : `Question ${currentQ + 1}/3 💕`}
          </DialogTitle>
        </DialogHeader>

        {!finished ? (
          <div className="space-y-5 p-2">
            <p className="text-xl font-body text-foreground text-center font-semibold">
              {quizzes[currentQ].question}
            </p>
            <div className="space-y-3">
              {quizzes[currentQ].options.map((option, i) => {
                let bgClass = "bg-secondary hover:bg-primary/10";
                if (selected !== null) {
                  if (i === quizzes[currentQ].correct) bgClass = "bg-green-100 border-green-400 text-green-800";
                  else if (i === selected) bgClass = "bg-red-100 border-red-400 text-red-800";
                }
                return (
                  <button
                    key={i}
                    onClick={() => selected === null && handleSelect(i)}
                    className={`w-full p-4 rounded-2xl border-2 border-border font-body font-medium text-left transition-all duration-300 ${bgClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 p-4">
            <span className="text-6xl">
              {score === 3 ? "🏆" : score >= 2 ? "💖" : "💕"}
            </span>
            <p className="text-2xl font-display text-foreground">
              You got {score}/3!
            </p>
            <p className="text-lg font-body text-muted-foreground">
              {score === 3
                ? "You know us perfectly! You're amazing! 🥰"
                : score >= 2
                ? "So close! You're wonderful anyway! 💝"
                : "Hehe, the answer is always the cutest one! 🙈"}
            </p>
            <button
              onClick={reset}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold"
            >
              Try Again 🔄
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
