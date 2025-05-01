import { useState } from "react";
import { FaChartBar, FaHome } from "react-icons/fa";
import Navbar from "./navbar";
import Footer from "./footer";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("Navbar");
  const tab = [
    { name: "Navbar", icon: <FaHome /> },
    { name: "Footer", icon: <FaChartBar /> },
  ];
  return (
    <div className=" w-full flex justify-center flex-col gap-4 py-4 bg-[#111827] text-white">
      <div className="flex justify-center gap-4">
        {tab.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all font-medium text-sm md:text-base
            ${
              activeTab === tab.name
                ? "bg-indigo-600 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="w-full p-6 rounded-xl shadow-lg">
        {activeTab === "Navbar" && <Navbar />}
        {activeTab === "Footer" && <Footer />}
      </div>
    </div>
  );
};

export default function NavbarLayout() {
  return (
    <div className=" w-[100%]  bg-[#0f172a] font-sans text-white">
      <TabMenu />
    </div>
  );
}
