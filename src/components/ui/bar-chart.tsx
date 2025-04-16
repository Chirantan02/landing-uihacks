'use client';

import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: { label: string; value: number; secondaryValue?: number }[];
  height?: number;
  width?: number;
}

export function BarChart({ data, height = 300, width }: BarChartProps) {
  const chartData: ChartData<'bar'> = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Value',
        data: data.map(item => item.value),
        backgroundColor: 'rgb(59, 130, 246)',
      },
      ...(data[0]?.secondaryValue !== undefined ? [{
        label: 'Growth',
        data: data.map(item => item.secondaryValue ?? 0),
        backgroundColor: 'rgb(99, 102, 241)',
      }] : []),
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height, width }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}