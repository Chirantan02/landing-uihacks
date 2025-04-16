'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface LineChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  height?: number;
  width?: number;
}

export function LineChart({
  data,
  options,
  height = 300,
  width
}: LineChartProps) {
  const defaultOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height, width }}>
      <Line data={data} options={options || defaultOptions} />
    </div>
  );
} 