import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (value) => {
    if (value === "C") return setInput("");
    if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput((prev) => prev + value);
  };

  const handleKeyDown = (e) => {
    const allowedKeys = "0123456789.+-*/";
    if (allowedKeys.includes(e.key)) {
      setInput((prev) => prev + e.key);
    } else if (e.key === "Enter") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key === "Escape") {
      setInput("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen flex items-center justify-center transition`}
    >
      <div className="w-80 bg-white dark:bg-gray-800 text-black p-6 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Calculator</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className="bg-black text-white text-right p-4 rounded text-2xl min-h-[60px] mb-4 dark:bg-gray-900">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className="p-4 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition text-xl"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
