import React from "react";
import Modal from "./modal";
import AlertButton from "./alert";
import BottomDrawer from "./drawer";

const ButtonLayout = () => {
  return (
    <div className="bg-gray-950 rounded-2xl p-8 shadow-xl w-full max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
        Interactive Buttons
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <Modal />
        <AlertButton />
        <BottomDrawer />
      </div>
    </div>
  );
};

export default ButtonLayout;
