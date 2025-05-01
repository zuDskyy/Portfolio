import { useState } from 'react';
import { IoMdClose } from 'react-icons/io'; // Close Icon

const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="animate-fade-in">
      {/* Button to trigger modal */}
      <button
        onClick={() => setShow(true)}
        className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-lg flex items-center space-x-2"
      >
        <span>Show Modal</span>
        <span className="text-xl">🎉</span>
      </button>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 sm:w-96 shadow-xl transform transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-purple-700">Modal Title</h2>
              <button
                onClick={() => setShow(false)}
                className="text-purple-500 text-2xl hover:text-purple-700 transition-colors"
              >
                <IoMdClose />
              </button>
            </div>
            <p className="mt-4 text-gray-600">This is the modal content. You can add more content here, like text, images, or forms.</p>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShow(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Action Confirmed")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
