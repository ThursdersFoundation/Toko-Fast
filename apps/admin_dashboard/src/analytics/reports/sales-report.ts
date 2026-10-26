export interface SalesReportSummary {
  generatedAt: string;
  total: number;
}

// TODO: aggregate real data via src/services/reports.service.ts.
export async function buildSalesReport(): Promise<SalesReportSummary> {
  return { generatedAt: new Date().toISOString(), total: 0 };
}
