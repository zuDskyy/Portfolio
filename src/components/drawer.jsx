import { useState } from "react";
import { motion } from "framer-motion";

const BottomDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className=" bg-gray-800 rounded-2xl text-white">
      {/* Hamburger Button */}
      <button onClick={toggleDrawer} className=" px-4 py-3  ">
        Drawer
      </button>

      {/* Drawer Component */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isDrawerOpen ? 0 : "100%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-5 rounded-tl-lg rounded-tr-lg"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Drawer Menu</h2>
          <button onClick={toggleDrawer} className="text-xl">
            ×
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Option 1
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Option 2
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Option 3
          </a>
        </div>
      </motion.div>


    
    </div>
  );
};

export default BottomDrawer;
