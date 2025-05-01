import './App.css';
import Calculator from './components/calculator';
import Testimonial from './components/testi-monial';
import TodoList from './components/todo-list';
import Sidebar from './components/sidebar';
import Carousel from './components/carousel';
import CanvasOff from './components/canvas';
import Forms from './components/forms';
import { FaRocket, FaCheckCircle, FaMagic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ButtonLayout from './components/button-layout';
import MyChart from './components/chart';
import MyCalendar from './components/calendar';
import MyBreadcrumb from './components/breadcrumb';
import Pagination from './components/pagination';
import Card from './components/card';
import Table from './components/table';
import NavbarLayout from './components/tab-layout';

const sampleImages = [
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
function App() {

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black  gap-6 space-y-6 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-blue-400 mb-4 flex justify-center items-center gap-2">
          <FaRocket className="text-yellow-300 animate-pulse" />
          UI Playground
        </h1>
        <p className="text-lg text-gray-300">Everything wrapped into one stunning animated layout ⚡</p>
      </header>


      <div className=" columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Calculator />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Testimonial />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Carousel images={sampleImages} />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <CanvasOff />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Sidebar />
        </motion.div>
      </div>
      <div className='columns-1 sm:columns-2 lg:columns-1 gap-6 space-y-6' >    <motion.div variants={itemVariants} className=" w-full break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
        <NavbarLayout />
      </motion.div>

      </div>
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6' >
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <ButtonLayout />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Forms />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <TodoList />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <MyBreadcrumb />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Table />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <MyCalendar />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <MyChart />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Pagination />
        </motion.div>
        <motion.div variants={itemVariants} className="break-inside-avoid bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-5">
          <Card />
        </motion.div>

      </div>



      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>
          Crafted with <FaMagic className="inline text-purple-500" /> by Zuka. All components in one beautiful grid.
          <FaCheckCircle className="inline text-green-400 ml-1" />
        </p>
      </footer>
    </motion.div>
  );
}

export default App;
