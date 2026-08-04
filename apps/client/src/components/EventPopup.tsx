import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-red-600 hover:text-white transition-all"
        >
        <X size={20} />
        </button>
        <a
            href="https://event.mindflix360.com/tech-talk-registration-form"
            target="_blank"
            rel="noopener noreferrer"
        >
        <img
            src="/images/work-ready-360.jpg"
            alt="Work Ready 360 Conclave"
            className="w-auto h-auto max-h-[80vh] max-w-[65vw] object-contain rounded-xl shadow-2xl mx-auto cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        />
        </a>
      </div>
    </div>
  );
}