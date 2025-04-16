'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  [key: string]: string | number;
}

interface Dataset {
  id: string;
  name: string;
  color: string;
}

interface RechartsBarChartProps {
  data: DataPoint[];
  categories: string[];
  indexBy: string;
  datasets: Dataset[];
  height?: number | string;
  title?: string;
  subtitle?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  yAxisLabel?: string;
  xAxisLabel?: string;
  layout?: 'vertical' | 'horizontal';
  className?: string;
  stacked?: boolean;
}

export function RechartsBarChart({
  data,
  categories,
  indexBy,
  datasets,
  height = 300,
  title,
  subtitle,
  showGrid = true,
  showLegend = true,
  yAxisLabel,
  xAxisLabel,
  layout = 'horizontal',
  className,
  stacked = false
}: RechartsBarChartProps) {
  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-base font-medium">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout={layout}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {showGrid && (
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={layout === 'horizontal' ? false : true}
                horizontal={layout === 'horizontal' ? true : false}
                stroke="var(--border)" 
                opacity={0.4}
              />
            )}
            <XAxis 
              dataKey={indexBy} 
              type={layout === 'horizontal' ? 'category' : 'number'}
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: 'var(--border)' }}
              label={xAxisLabel ? { value: xAxisLabel, position: 'insideBottom', offset: -5 } : undefined}
            />
            <YAxis 
              type={layout === 'horizontal' ? 'number' : 'category'}
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: 'var(--border)' }}
              label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{ fontSize: '12px' }}
              labelStyle={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}
            />
            {showLegend && (
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px' }}
              />
            )}
            {datasets.map((dataset) => (
              <Bar
                key={dataset.id}
                dataKey={dataset.name}
                fill={dataset.color}
                radius={[4, 4, 0, 0]}
                stackId={stacked ? 'stack' : undefined}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
