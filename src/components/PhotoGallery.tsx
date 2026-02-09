import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PhotoGalleryProps {
  open: boolean;
  onClose: () => void;
}

// Placeholder photos - user should replace these with real couple photos
const photos = [
  { id: 1, src: "/photos/first-date.jpeg", caption: "First pandal hoping" },
  { id: 2, src: "/photos/trip.jpeg", caption: "Most beautiful 15mins walk" },
  { id: 3, src: "/photos/sunset.jpeg", caption: "Mocha roll" },
  { id: 4, src: "/photos/celebrations.jpeg", caption: "Celebrating us" },
  { id: 5, src: "/photos/cozy.jpeg", caption: "Fav picture" },
  { id: 6, src: "/photos/forever.jpeg", caption: "Our first picture together" },
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
      className=" relative aspect-square rounded-2xl bg-secondary border-2 border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-xs font-body text-white p-2">
          {photo.caption}
        </p>
      </div>
    </div>
  ))}
</div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGallery;
