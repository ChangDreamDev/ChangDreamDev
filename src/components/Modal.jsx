import React, { useEffect, useState, useCallback, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ projects = [], currentIndex = 0, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [direction, setDirection] = useState(0);
  const [, startTransition] = useTransition();

  const paginate = useCallback(
    (dir) => {
      setDirection(dir);
      startTransition(() => {
        setIndex((prev) => (prev + dir + projects.length) % projects.length);
      });
    },
    [projects.length]
  );

  const nextImage = useCallback(() => paginate(1), [paginate]);
  const prevImage = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, nextImage, prevImage]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4 text-white"
      >
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          ‹
        </button>

        <div className="relative max-w-3xl w-full flex flex-col items-center p-6 pointer-events-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`slide-${index}`}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold mb-4">{projects[index].title}</h3>
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="max-w-full max-h-[60vh] object-contain rounded mb-4"
              />
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {projects[index].link && (
                  <a
                    href={projects[index].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    🌐 Live Site
                  </a>
                )}
                {projects[index].github && (
                  <a
                    href={projects[index].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.111.82-.26.82-.577v-2.07c-3.338.725-4.042-1.415-4.042-1.415-.546-1.385-1.333-1.753-1.333-1.753-1.089-.744.083-.729.083-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.137 3.004.404 2.29-1.553 3.295-1.23 3.295-1.23.654 1.652.242 2.872.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.476 5.922.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.826.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;