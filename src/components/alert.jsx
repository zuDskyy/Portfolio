import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const AlertButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-xl font-semibold shadow-lg flex items-center gap-2"
      >
        <FaExclamationTriangle />
        Alert
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-scale-in">
            <div className="flex flex-col items-center text-center space-y-4">
              <FaExclamationTriangle className="text-4xl text-red-500 animate-bounce" />
              <h2 className="text-xl font-bold text-gray-800">Alert</h2>
              <p className="text-gray-600">This is a beautiful custom alert message.</p>
              <button
                onClick={() => setShow(false)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertButton;
