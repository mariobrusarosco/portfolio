import { ISideProject } from "./typing/interfaces-and-enums";

export const SIDE_PROJECTS: ISideProject[] = [
  {
    label: "One Word",
    id: "one-word",
    url: "https://one-word.netlify.app/",
    description: (
      <p>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </p>
    ),
  },
  {
    label: "One Word - API",
    id: "one-word-api",
    url: "https://one-word-api.herokuapp.com/",
    description: (
      <p>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </p>
    ),
  },
  {
    label: "Digital Garden",
    id: "digital-garden",
    url: "https://one-word-api.herokuapp.com/",
    description: (
      <p>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </p>
    ),
  },
];

export const sideProjects = [
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
