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
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-red-600 hover:text-white transition"
        >
          <X size={22} />
        </button>

        <img
          src="public/images/work-ready-360.jpg"
          alt="Work Ready 360 Conclave"
          className="w-full rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}