export interface SideProject {
  label: string;
  queryParams: Record<string, string | boolean>[];
  url: string;
  id: string;
  Component: React.FC;
}
