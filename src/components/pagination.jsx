import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const pages = [1, 2, 3];

const Pagination = () => {
  const currentPage = 2;

  const buttonClass = (active = false) =>
    `w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300
     ${active ? "bg-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"}`;

  const motionProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <div className="flex justify-center items-center gap-2 py-6 flex-wrap">
      {/* First */}
      <motion.button {...motionProps} className={buttonClass()}>
        <ChevronsLeft className="w-5 h-5" />
      </motion.button>

      {/* Prev */}
      <motion.button {...motionProps} className={buttonClass()}>
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <motion.button
          key={page}
          {...motionProps}
          className={buttonClass(page === currentPage)}
        >
          {page}
        </motion.button>
      ))}

      {/* Next */}
      <motion.button {...motionProps} className={buttonClass()}>
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Last */}
      <motion.button {...motionProps} className={buttonClass()}>
        <ChevronsRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default Pagination;
