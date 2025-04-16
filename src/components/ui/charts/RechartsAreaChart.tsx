'use client';

import React from 'react';
import {
  AreaChart,
  Area,
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
  fillOpacity?: number;
}

interface RechartsAreaChartProps {
  data: DataPoint[];
  categories: string[];
  datasets: Dataset[];
  height?: number | string;
  title?: string;
  subtitle?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  yAxisLabel?: string;
  xAxisLabel?: string;
  className?: string;
  stacked?: boolean;
}

export function RechartsAreaChart({
  data,
  categories,
  datasets,
  height = 300,
  title,
  subtitle,
  showGrid = true,
  showLegend = true,
  yAxisLabel,
  xAxisLabel,
  className,
  stacked = false
}: RechartsAreaChartProps) {
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
          <AreaChart
            data={data}
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
                vertical={false} 
                stroke="var(--border)" 
                opacity={0.4}
              />
            )}
            <XAxis 
              dataKey={categories[0]} 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: 'var(--border)' }}
              label={xAxisLabel ? { value: xAxisLabel, position: 'insideBottom', offset: -5 } : undefined}
            />
            <YAxis 
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
              <Area
                key={dataset.id}
                type="monotone"
                dataKey={dataset.name}
                stroke={dataset.color}
                fill={dataset.color}
                fillOpacity={dataset.fillOpacity || 0.2}
                stackId={stacked ? 'stack' : undefined}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
