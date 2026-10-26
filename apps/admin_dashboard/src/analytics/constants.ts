export const ANALYTICS_PERIODS = ['7d', '30d', '90d', '12m'] as const;
export type AnalyticsPeriod = (typeof ANALYTICS_PERIODS)[number];
