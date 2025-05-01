import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative max-w-xl w-full mx-auto bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Image Carousel</h2>

      <div className="relative h-64 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index}`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prev}
          className="bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={next}
          className="bg-white shadow-lg p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
