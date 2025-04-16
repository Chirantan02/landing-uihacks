'use client';

import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

interface BarChartProps {
  data: { label: string; value: number; secondaryValue?: number }[];
}

export function BarChart({ data }: BarChartProps) {
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
      type: 'bar',
      data: {
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
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
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