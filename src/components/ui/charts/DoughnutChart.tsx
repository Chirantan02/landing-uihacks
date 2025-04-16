import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

export function DoughnutChart({ data }: DoughnutChartProps) {
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
      }}
    />
  );
} 