export interface ISideProject {
  label: string;
  url: string;
  id: string;
  description: React.ReactElement[];
  benefits: React.ReactElement[];
  stack: React.ReactElement[];
  figmaUrl?: string;
  postmanUrl?: string;
  githubUrl: string;
}

export interface SideProject {
  label: string;
  url: string;
  id: string;
}
