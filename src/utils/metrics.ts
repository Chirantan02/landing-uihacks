interface MetricsData {
  duration: number;
  success: boolean;
  error?: string;
  maskType: string;
}

export const metrics = {
  recordInpaintRequest: (data: MetricsData) => {
    // Add metrics logic
  },
  recordMetric: (name: string, value: number) => {
    // Add metrics logic
  }
}; 