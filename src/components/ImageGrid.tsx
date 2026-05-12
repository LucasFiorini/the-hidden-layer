"use client";

import { useState } from "react";

type GridImage = {
  src: string;
  alt?: string;
  caption?: string;
  fullWidth?: boolean;
  flipX?: boolean;
  flipY?: boolean;
  rotate?: "-90" | "90";
  small?: boolean;
};

export default function ImageGrid({ images, projectTitle }: { images: GridImage[]; projectTitle: string }) {
  const [lightbox, setLightbox] = useState<GridImage | null>(null);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <figure
            key={i}
            className={`rounded-lg overflow-hidden border border-neon-green/10 bg-dark-800/60 cursor-pointer group${img.fullWidth ? " col-span-2" : ""}`}
            onClick={() => setLightbox(img)}
          >
            <div className={`overflow-hidden flex items-center justify-center ${img.fullWidth ? "h-64" : img.small ? "h-48" : "h-44"}`}>
              <img
                src={img.src}
                alt={img.alt ?? ""}
                className={`object-cover transition-transform duration-300${img.rotate ? "" : " group-hover:scale-105"}${img.rotate ? ` ${img.rotate === "-90" ? "-rotate-90" : "rotate-90"} h-[200%] w-auto` : " w-full h-full"}${img.flipX ? " -scale-x-100" : ""}${img.flipY ? " -scale-y-100" : ""}`}
              />
            </div>
            {img.caption && (
              <figcaption className="px-3 py-2 text-xs text-slate-500">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-5 text-slate-400 hover:text-white text-2xl font-mono"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt ?? projectTitle}
            className={`max-w-full max-h-[90vh] object-contain rounded-lg${lightbox.rotate ? ` ${lightbox.rotate === "-90" ? "-rotate-90" : "rotate-90"}` : ""}${lightbox.flipX ? " -scale-x-100" : ""}${lightbox.flipY ? " -scale-y-100" : ""}`}
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox.caption && (
            <p className="absolute bottom-6 text-xs text-slate-400">{lightbox.caption}</p>
          )}
        </div>
      )}
    </>
  );
}
