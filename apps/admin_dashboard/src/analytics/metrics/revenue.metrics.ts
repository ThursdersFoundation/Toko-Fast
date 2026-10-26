export interface RevenueMetricPoint {
  period: string;
  value: number;
}

// TODO: replace with real aggregation once the analytics API is wired up.
export function summarizeRevenueMetric(
  points: readonly RevenueMetricPoint[],
): { total: number; average: number } {
  const total = points.reduce((sum, point) => sum + point.value, 0);
  return { total, average: points.length === 0 ? 0 : total / points.length };
}
