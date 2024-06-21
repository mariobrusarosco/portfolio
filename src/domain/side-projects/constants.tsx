import { ISideProject } from "./typing/interfaces-and-enums";

export const SIDE_PROJECTS: ISideProject[] = [
  {
    label: "One Word",
    id: "one-word",
    url: "https://one-word.netlify.app/",
    description: (
      <p className="text-pink-100">
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </p>
    ),
    benefits: (
      <ul className="flex gap-x-6  gap-y-2 flex-wrap  text-pink-100">
        <li>
          Grasp <span className="text-blue-green-300">Back End</span> knowledge
          by understanding how much work is needed to support a{" "}
          <span className="text-blue-green-300">Front End</span>
          application.
        </li>
        <li>
          Grasp the concepts of an{" "}
          <span className="text-blue-green-300">ORM</span> and see if there are
          benefits in practice.
        </li>
      </ul>
    ),
    stack: (
      <ul className="flex gap-x-6  gap-y-2 flex-wrap text-blue-green-300">
        <li>Node / Express.</li>
        <li>
          Railway<span className="text-blue-green-300"> (Hosting)</span>.
        </li>
        <li>
          Railway<span className="text-blue-green-300"> (Hosting)</span>.
        </li>
      </ul>
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
    benefits: (
      <ul className="flex gap-x-6  gap-y-2 flex-wrap">
        <li>
          Grasp <span className="text-blue-green-300">Back End</span> knowledge
          by understanding how much work is needed to support a{" "}
          <span className="text-blue-green-300">Front End</span>
          application.
        </li>
        <li>
          Grasp the concepts of an{" "}
          <span className="text-blue-green-300">ORM</span> and see if there are
          benefits in practice.
        </li>
      </ul>
    ),
    stack: (
      <ul className="flex gap-x-6  gap-y-2 flex-wrap text-blue-green-300">
        <li>Node / Express.</li>
        <li>
          Railway<span className="text-blue-green-300"> (Hosting)</span>.
        </li>
        <li>
          Railway<span className="text-blue-green-300"> (Hosting)</span>.
        </li>
      </ul>
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
    benefits: (
      <ul className="flex gap-x-6  gap-y-2 flex-wrap">
        <li>
          Grasp <span className="text-blue-green-300">Back End</span> knowledge
          by understanding how much work is needed to support a{" "}
          <span className="text-blue-green-300">Front End</span>
          application.
        </li>
        <li>
          Grasp the concepts of an{" "}
          <span className="text-blue-green-300">ORM</span> and see if there are
          benefits in practice.
        </li>
      </ul>
    ),
    stack: (
      <ul className="flex gap-x-6  gap-y-2 flex-wrap text-blue-green-300">
        <li>Node / Express.</li>
        <li>
          Railway<span className="text-blue-green-300"> (Hosting)</span>.
        </li>
        <li>
          Railway<span className="text-blue-green-300"> (Hosting)</span>.
        </li>
      </ul>
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
