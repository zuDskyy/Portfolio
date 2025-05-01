import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <motion.div
        whileHover={{
          scale: 1.05,
        
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="w-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-all transform hover:scale-105 hover:rotate-3"
      >
        {/* Image Section */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Card "
            loading="lazy"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
        </div>

        {/* Title Section */}
        <h3 className="text-2xl font-bold mb-2">Amazing Card Design</h3>

        {/* Description Section */}
        <p className="text-lg opacity-80 mb-4">
          This modern interactive card features a beautiful gradient background,
          a stunning image, and a smooth hover effect for an engaging
          experience.
        </p>

        {/* Details */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-300">Category: Design</p>
          <p className="text-sm font-medium text-gray-300">Date: April 2025</p>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-lg rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:bg-blue-700"
        >
          Explore Now
        </motion.button>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="w-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl text-white hover:shadow-2xl transition-all transform hover:scale-105 hover:rotate-3"
      >
        {/* Skeleton Image Section */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-600 animate-pulse">
          <div className="w-full h-48 bg-gray-500 rounded-lg"></div>
        </div>

        {/* Skeleton Title Section */}
        <div className="h-6 bg-gray-500 mb-2 animate-pulse"></div>

        {/* Skeleton Description Section */}
        <div className="h-4 bg-gray-500 mb-4 animate-pulse"></div>

        {/* Skeleton Details */}
        <div className="mb-4">
          <div className="h-4 bg-gray-500 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-500 mb-2 animate-pulse"></div>
        </div>

        {/* Skeleton Button */}
        <div className="w-32 h-10 bg-gray-500 rounded-full animate-pulse"></div>
      </motion.div>
    </div>
  );
};

export default Card;
