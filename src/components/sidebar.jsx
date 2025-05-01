import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// ორივე სია
const navItems = [
  { icon: <FaHome className="text-blue-400" />, label: "Home" },
  { icon: <FaInfoCircle className="text-yellow-400" />, label: "About" },
  { icon: <FaEnvelope className="text-green-400" />, label: "Contact" },
];

const userItems = [
  { icon: <FaCog className="text-gray-300" />, label: "Settings" },
  { icon: <FaSignOutAlt className="text-gray-300" />, label: "Logout" },
];

const DualSidebar = () => {
  return (
    <div className="flex h-screen justify-between rounded-3xl  gap-10 bg-gray-950 text-white">

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
        className="w-72 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-l-2xl shadow-2xl flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaBars className="text-xl text-blue-400 animate-pulse" />
            <h2 className="text-2xl font-bold tracking-wide">Sidebar Menu</h2>
          </div>

          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:bg-gray-700 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4">
          <div className="flex items-center gap-4 px-2">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-400"
            />
            <div>
              <p className="text-lg font-semibold">Zurab D.</p>
              <p className="text-sm text-gray-400">Fullstack Developer</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {userItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded-xl cursor-pointer transition-all"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>



      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="w-20 bg-gray-900 p-4 flex flex-col justify-between rounded-r-2xl shadow-2xl"
      >
        <div className="space-y-4">
          <FaBars className="text-xl text-blue-400 mx-auto" />
          {navItems.map((item, i) => (
            <div
              key={i}
              className="text-2xl p-3 rounded-xl hover:bg-gray-700 cursor-pointer flex justify-center"
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="space-y-3 pb-4">
          {userItems.map((item, i) => (
            <div
              key={i}
              className="text-xl p-3 rounded-xl hover:bg-gray-700 cursor-pointer flex justify-center"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DualSidebar;
