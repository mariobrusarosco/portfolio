import { SideProject } from "./typing/interfaces-and-enums";

export const sideProjects: SideProject[] = [
  {
    label: "One Word",
    id: "one-word",
    url: "https://one-word.netlify.app/",
    queryParams: [{ project_id: "one-word" }],
    Component: () => "OneWordProject",
  },
  {
    label: "One Word - API",
    id: "one-word-api",
    url: "https://one-word-api.herokuapp.com/",
    queryParams: [{ project_id: "one-word-api" }],
    Component: () => "OneWordProject",
  },
];
