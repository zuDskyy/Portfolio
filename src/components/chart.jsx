import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80],
      backgroundColor: 'rgba(99, 102, 241, 0.7)', // Tailwind's indigo-500
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#e0e0e0', // light text for dark bg
        font: { size: 14, weight: 'bold' },
      },
    },
    title: {
      display: true,
      text: 'Monthly Sales Overview',
      color: '#f9fafb',
      font: {
        size: 20,
        weight: 'bold',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#cbd5e1', // slate-300
      },
      grid: {
        color: '#334155', // slate-700
      },
    },
    y: {
      ticks: {
        color: '#cbd5e1',
      },
      grid: {
        color: '#334155',
      },
    },
  },
};

function MyChart() {
  return (
    <div className="bg-gradient-to-br from-[#1e1e2f] to-[#2b2b40] p-6 rounded-xl shadow-lg border border-gray-700">
      <Bar data={data} options={options} />
    </div>
  );
}

export default MyChart;
