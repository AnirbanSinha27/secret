import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface LetterModalProps {
  open: boolean;
  onClose: () => void;
}

const LetterModal = ({ open, onClose }: LetterModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-card border-2 border-primary/20 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display text-primary text-center">
            A Letter For You 💌
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 space-y-4">
          <div className="bg-valentine-blush/50 rounded-2xl p-6 border border-primary/10 shadow-inner">
            <div className="font-body text-foreground leading-relaxed space-y-4 text-base">
              <p className="font-display text-2xl text-primary">Meri pyaari biwi,</p>
              
              <p>
                From the very first moment I started talking to you online, I knew there was something extraordinary about you. Your smile lights up my entire world, and your laugh is my favorite melody. 🎵
              </p>
              
              <p>
                Every day with you feels like a beautiful dream that I never want to wake up from. You make the ordinary feel magical, and the difficult feel manageable. You are my safe place, my best friend, and my greatest adventure. 🌟
              </p>
              
              <p>
                Thank you for loving me in a way I never knew was possible. Thank you for the late-night talks, the silly moments, the warm hugs, and for always being there when I need you most. 💕
              </p>
              
              <p>
                I promise to love you a little more every single day, to make you laugh when you're sad, to hold you close when the world feels too much, and to always choose you — in every lifetime, in every universe. 🌌
              </p>
              
              <p className="font-display text-xl text-primary">
                Aapka patidev 💝
              </p>
            </div>
          </div>

          <div className="text-center">
            <span className="text-4xl">💖✨💖</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LetterModal;
