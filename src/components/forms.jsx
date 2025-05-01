import { useState } from "react";

const Forms = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    range: 50,
    gender: "male",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  // Handle file upload progress simulation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);

      if (uploadProgress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-xl space-y-8 transition-all duration-500"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Registration Form
      </h2>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-white">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border-2 w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
          placeholder="Your email address"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-white">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="border-2 w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
          placeholder="Your password"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-white">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-2 w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
          placeholder="Your phone number"
          required
        />
      </div>

      {/* Range */}
      <div>
        <label className="block text-sm font-semibold text-white">Range</label>
        <input
          type="range"
          min="0"
          max="100"
          value={formData.range}
          onChange={(e) => setFormData({ ...formData, range: e.target.value })}
          className="w-full h-2 bg-blue-200 rounded-lg cursor-pointer"
        />
        <span className="text-white mt-2">{formData.range}</span>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-semibold text-white">Gender</label>
        <div className="flex gap-8">
          <label className="flex items-center space-x-3 text-white">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="text-blue-600 focus:ring-2 focus:ring-blue-400"
            />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-3 text-white">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="text-blue-600 focus:ring-2 focus:ring-blue-400"
            />
            <span>Female</span>
          </label>
        </div>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold text-white">
          Upload File
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
        />
        {file && (
          <span className="text-white mt-2">Selected: {file.name}</span>
        )}

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="mt-2">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-white text-sm">{progress}%</span>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Forms;
