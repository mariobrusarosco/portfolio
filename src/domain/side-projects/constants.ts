import { OneWordProject } from "./components/projects/one-word";
import { OneWordApiProject } from "./components/projects/one-word-api";
import { SideProject } from "./typing/interfaces-and-enums";

export const sideProjects: SideProject[] = [
  {
    label: "One Word",
    id: "one-word",
    url: "https://one-word.netlify.app/",
    queryParams: [{ id: "one-word" }],
    Component: OneWordProject,
  },
  {
    label: "One Word - API",
    id: "one-word-api",
    url: "https://one-word-api.herokuapp.com/",
    queryParams: [{ id: "one-word-api" }],
    Component: OneWordApiProject,
  },
];
