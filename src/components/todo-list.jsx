import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../features/todo/todo-slice";
import { useState } from "react";
import { FaTrash, FaCheck, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-2xl text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <h2 className="text-3xl font-bold mb-5 text-white flex items-center gap-3">
        <FaCheck className="text-green-500 animate-pulse" /> Todo List
      </h2>

      <div className="flex gap-3 mb-5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task here..."
          className="flex-1 p-4 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white transition-all"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-lg transition-all flex items-center transform hover:scale-105"
        >
          <FaPlus className="mr-2" /> Add Task
        </button>
      </div>

      <ul className="space-y-4">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300 ${
                todo.done
                  ? "bg-green-100 text-green-800 line-through"
                  : "bg-gray-800 text-white"
              }`}
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="cursor-pointer text-xl font-semibold transition-colors hover:text-yellow-500"
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <FaTrash />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default TodoList;
