export interface Skill {
  id: string;
  label: string;
  queryParams: Record<string, string | boolean>[];
}
