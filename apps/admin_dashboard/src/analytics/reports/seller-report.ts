export interface SellerReportSummary {
  generatedAt: string;
  total: number;
}

// TODO: aggregate real data via src/services/reports.service.ts.
export async function buildSellerReport(): Promise<SellerReportSummary> {
  return { generatedAt: new Date().toISOString(), total: 0 };
}
