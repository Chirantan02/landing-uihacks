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

interface RechartsDonutChartProps {
  data: DataPoint[];
  height?: number | string;
  title?: string;
  subtitle?: string;
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
  valueFormatter?: (value: number) => string;
  showLabels?: boolean;
}

export function RechartsDonutChart({
  data,
  height = 300,
  title,
  subtitle,
  showLegend = true,
  innerRadius = 60,
  outerRadius = 80,
  className,
  valueFormatter = (value) => `${value}`,
  showLabels = false
}: RechartsDonutChartProps) {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    if (!showLabels) return null;
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#fff" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
              label={renderCustomizedLabel}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {/* Center text showing total */}
            {innerRadius > 0 && (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="recharts-text"
              >
                <tspan x="50%" dy="-0.5em" fontSize="14" fontWeight="bold" fill="var(--foreground)">
                  {valueFormatter(total)}
                </tspan>
                <tspan x="50%" dy="1.5em" fontSize="12" fill="var(--muted-foreground)">
                  Total
                </tspan>
              </text>
            )}
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
