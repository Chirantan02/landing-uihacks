'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  name: string;
  value: number;
  color: string;
}

interface RechartsPieChartProps {
  data: DataPoint[];
  height?: number | string;
  title?: string;
  subtitle?: string;
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
  valueFormatter?: (value: number) => string;
}

export function RechartsPieChart({
  data,
  height = 300,
  title,
  subtitle,
  showLegend = true,
  innerRadius = 0,
  outerRadius = 80,
  className,
  valueFormatter = (value) => `${value}`
}: RechartsPieChartProps) {
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
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [valueFormatter(value), 'Value']}
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
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', paddingTop: '16px' }}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
