export interface Experience {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  location: string;
  queryParams: Record<string, string | boolean>[];
}
