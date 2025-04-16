import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
  options?: {
    indexAxis?: 'x' | 'y';
  };
}

export function BarChart({ data, options = {} }: BarChartProps) {
  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
        ...options,
      }}
    />
  );
} 