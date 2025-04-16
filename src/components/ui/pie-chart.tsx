'use client';

import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

interface PieChartProps {
  data: { label: string; value: number }[];
}

export function PieChart({ data }: PieChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const config: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: data.map(item => item.label),
        datasets: [{
          data: data.map(item => item.value),
          backgroundColor: [
            'rgb(59, 130, 246)',
            'rgb(99, 102, 241)',
            'rgb(139, 92, 246)',
            'rgb(168, 85, 247)',
            'rgb(217, 70, 239)',
          ],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);

    return () => {
      chartInstance.current?.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
} 