import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", damping: 12 }}
      className="relative bg-gradient-to-br from-[#1e1e2f] to-[#2b2b40] rounded-3xl shadow-2xl px-8 py-10 max-w-2xl mx-auto text-gray-200 overflow-hidden border border-gray-700"
    >
      {/* Decorative Quote Icon */}
      <FaQuoteLeft className="absolute top-5 left-5 text-5xl text-indigo-700 opacity-10" />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xl font-medium italic text-gray-300 leading-relaxed mb-6">
          “The dark-themed interface is stunning and easy on the eyes. Everything feels ultra-modern, intuitive, and lightning fast.”
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src="https://i.pravatar.cc/100?img=21"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <div>
            <p className="font-bold text-lg text-white">Nika Devdariani</p>
            <p className="text-sm text-gray-400">Senior React Developer</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
