import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PhotoGalleryProps {
  open: boolean;
  onClose: () => void;
}

// Placeholder photos - user should replace these with real couple photos
const photos = [
  { id: 1, emoji: "🥰", caption: "Our first date" },
  { id: 2, emoji: "💕", caption: "That special trip" },
  { id: 3, emoji: "🌅", caption: "Sunset together" },
  { id: 4, emoji: "🎉", caption: "Celebrating us" },
  { id: 5, emoji: "🤗", caption: "Cozy moments" },
  { id: 6, emoji: "💖", caption: "Forever & always" },
];

const PhotoGallery = ({ open, onClose }: PhotoGalleryProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-2 border-primary/20 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display text-primary text-center">
            Our Beautiful Memories 📸
          </DialogTitle>
        </DialogHeader>

        <div className="p-2">
          <p className="text-center font-body text-muted-foreground mb-4">
            Every photo tells our story 💕
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square rounded-2xl bg-secondary border-2 border-border flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {photo.emoji}
                </span>
                <p className="text-xs font-body text-muted-foreground font-medium">
                  {photo.caption}
                </p>
                <p className="text-[10px] font-body text-muted-foreground/50 italic">
                  Replace with your photo!
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-body text-muted-foreground mt-4 italic">
            💡 Tip: Replace the placeholders with your real photos in the code!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGallery;
