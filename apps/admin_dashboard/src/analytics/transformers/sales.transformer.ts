export interface ChartPoint {
  label: string;
  value: number;
}

// TODO: adapt to the real analytics payload shape.
export function toSalesChartSeries(
  points: readonly { period: string; value: number }[],
): ChartPoint[] {
  return points.map((point) => ({ label: point.period, value: point.value }));
}
