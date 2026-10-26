export interface OperationalReportSummary {
  generatedAt: string;
  total: number;
}

// TODO: aggregate real data via src/services/reports.service.ts.
export async function buildOperationalReport(): Promise<OperationalReportSummary> {
  return { generatedAt: new Date().toISOString(), total: 0 };
}
