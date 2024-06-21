import { ISideProject } from "./typing/interfaces-and-enums";

export const SIDE_PROJECTS: ISideProject[] = [
  {
    label: "One Word",
    id: "one-word",
    url: "https://one-word.netlify.app/",
    description: [
      <>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </>,
    ],
    benefits: [
      <>
        Grasp <span className="text-blue-green-300">Back End</span> knowledge by
        understanding how much work is needed to support a{" "}
        <span className="text-blue-green-300">Front End</span>
        application.
      </>,
      <>
        Grasp the concepts of an{" "}
        <span className="text-blue-green-300">ORM</span> and see if there are
        benefits in practice.
      </>,
    ],
    stack: [
      <>Node / Express</>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
    ],
  },
  {
    label: "One Word - API",
    id: "one-word-api",
    url: "https://one-word-api.herokuapp.com/",
    description: [
      <>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </>,
    ],
    benefits: [
      <>
        Grasp <span className="text-blue-green-300">Back End</span> knowledge by
        understanding how much work is needed to support a{" "}
        <span className="text-blue-green-300">Front End</span>
        application.
      </>,
      <>
        Grasp the concepts of an{" "}
        <span className="text-blue-green-300">ORM</span> and see if there are
        benefits in practice.
      </>,
    ],
    stack: [
      <>Node / Express</>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
    ],
  },
  {
    label: "Digital Garden",
    id: "digital-garden",
    url: "https://one-word-api.herokuapp.com/",
    description: [
      <>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </>,
    ],
    benefits: [
      <>
        Grasp <span className="text-blue-green-300">Back End</span> knowledge by
        understanding how much work is needed to support a{" "}
        <span className="text-blue-green-300">Front End</span>
        application.
      </>,
      <>
        Grasp the concepts of an{" "}
        <span className="text-blue-green-300">ORM</span> and see if there are
        benefits in practice.
      </>,
    ],
    stack: [
      <>Node / Express</>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
    ],
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
