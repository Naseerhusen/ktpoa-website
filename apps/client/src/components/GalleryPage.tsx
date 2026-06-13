import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  name: string;
  url: string;
}

export function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzcCfwGUOS6r634mGPNkadfU8BiWCS-hlRY9esJDZ--623JQZ-pxQt9DtRjLj9Ppy7C/exec"
    )
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <section className="bg-[#0F172A] py-20 text-center">
        <h1 className="text-5xl font-bold text-white">
          KTPOA Gallery
        </h1>
        <p className="text-slate-400 mt-3">
          Event Photos and Memories
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow cursor-pointer bg-white"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90vh]"
          />
        </div>
      )}
    </div>
  );
}