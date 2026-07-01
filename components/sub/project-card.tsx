"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string | ReactNode;
  onlineLink?: string;
  sourceCodeLink?: string;
  videoLink?: string;
  galleryImages?: { src: string; alt?: string; description?: string }[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  onlineLink,
  sourceCodeLink,
  videoLink,
  galleryImages,
}: ProjectCardProps) => {
  const images = galleryImages ?? [];
  const hasGallery = images.length > 0;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = () => {
    if (!hasGallery) return;
    setActiveIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const goPrev = () => {
    if (!hasGallery) return;
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!hasGallery) return;
    setActiveIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    if (!isGalleryOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isGalleryOpen, hasGallery, images.length]);

  const activeImage = hasGallery ? images[activeIndex] : null;
  const activeDescription = activeImage?.description?.trim();

  return (
    <div className="group perspective">
      <div className="relative rounded-lg border border-[#2A0E61] shadow-lg transform transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105">
        {hasGallery ? (
          <button
            type="button"
            className="block w-full overflow-hidden rounded-t-lg text-left"
            onClick={openGallery}
            aria-label={`Open ${title} gallery`}
          >
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain cursor-pointer"
            />
          </button>
        ) : (
          <div className="overflow-hidden rounded-t-lg">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        )}

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {typeof description === "string" ? (
            <p className="mt-2 text-gray-300">{description}</p>
          ) : (
            description
          )}

          {(sourceCodeLink || videoLink || onlineLink) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2A0E61] hover:bg-[#3b1584] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Source code
                </a>
              )}
              {videoLink && (
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2A0E61] hover:bg-[#3b1584] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Video
                </a>
              )}
              {onlineLink && (
                <a
                  href={onlineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2A0E61] hover:bg-[#3b1584] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Online
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {isGalleryOpen && hasGallery && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} images`}
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl rounded-lg border border-[#2A0E61] bg-[#050014] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
              onClick={closeGallery}
              aria-label="Close"
            >
              X
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  Next
                </button>
              </>
            )}

            <div className="p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt ?? `${title} image ${activeIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 min-h-10">
                {activeDescription && (
                  <p className="text-sm text-gray-200">{activeDescription}</p>
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-300">
                    {activeIndex + 1} / {images.length}
                  </p>
                  <div className="flex flex-wrap justify-end gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`h-2.5 w-2.5 rounded-full ${
                          idx === activeIndex ? "bg-white" : "bg-white/30"
                        } cursor-pointer`}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
