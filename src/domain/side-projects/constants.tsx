import { ISideProject } from "./typing/interfaces-and-enums";

export const SIDE_PROJECTS: ISideProject[] = [
  {
    label: "One Word",
    id: "one-word",
    githubUrl: "https://github.com/mariobrusarosco/one-word",
    url: "https://one-word.mariobrusarosco.com/",
    figmaUrl:
      "https://www.figma.com/design/KZ4tq3xzzz2CvWwijUZoRy/Side-Projects?node-id=918-4431&t=1HPCS5OETTC7tSi1-1",
    description: [
      <>
        It is a virtual board game made as side project. It is heavily based on
        “Just One” (link) - a cooperative party game in which participants have
        to play together to discover as many mystery words as possible.
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
      <>React</>,
      <>React Query (Server State)</>,
      <>Zustand (UI State)</>,
      <>Vite</>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
      <>
        Socket IO
        <span className="text-blue-green-300"> (Socket Connection)</span>
      </>,
    ],
  },
  {
    label: "One Word - API",
    id: "one-word-api",
    githubUrl: "https://github.com/mariobrusarosco/api-one-word",
    postmanUrl:
      "https://www.postman.com/mario-brusarosco/workspace/mario-brusarosco/collection/2930329-c069887a-c13d-4bee-8bda-e69e3f5b9163",
    url: "https://api-one-word.mariobrusarosco.com/",
    description: [
      <>
        One Word is a simple web application that helps you to focus on one word
        at a time.
      </>,
    ],
    benefits: [
      <>
        I can grasp <span className="text-blue-green-300">Back End</span>{" "}
        knowledge by understanding how much work is needed to support a{" "}
        <span className="text-blue-green-300">Front End</span> application.
      </>,
      <>
        I can grasp some{" "}
        <span className="text-blue-green-300">ORM concepts</span> and see their
        benefits in action.
      </>,
      <>
        I can learn and practice{" "}
        <span className="text-blue-green-300">Typescript</span> for an ORM
        (prisma).
      </>,
    ],
    stack: [
      <>Node / Express</>,
      <>Typescript</>,
      <>Postgre</>,
      <>Prisma</>,
      <>
        Railway<span className="text-blue-green-300"> (Hosting)</span>
      </>,
      <>
        SocketIO
        <span className="text-blue-green-300"> (Socket Connection)</span>
      </>,
    ],
  },
  {
    label: "Digital Garden",
    id: "digital-garden",
    githubUrl: "https://github.com/mariobrusarosco/digital-garden/",
    url: "https://garden.mariobrusarosco.com/",
    description: [
      <>
        Collection of my notes regarding{" "}
        <span className="text-blue-green-300">Software Development</span>. All
        based on a <span className="text-blue-green-300">Digital Garden</span>{" "}
        concept because I think it is a nice way to share things I am learning
        and struggling. Definitely not a way to organize my Notion. Everything
        is fine over there.
      </>,
    ],
    benefits: [
      <>
        Opportunity to implement an App with{" "}
        <span className="text-blue-green-300">Static Generated Content</span>.
      </>,
      <>
        Opportunity to integrated Next JS with a{" "}
        <span className="text-blue-green-300">CMS</span>.
      </>,
      <>
        Have a place to document{" "}
        <span className="text-blue-green-300">POCs</span> and{" "}
        <span className="text-blue-green-300">Code Snippets</span> with ease.
      </>,
      <>
        Validate if <span className="text-blue-green-300">Tailwind CSS</span> is
        a good fit for a project with{" "}
        <span className="text-blue-green-300">few pages</span>.
      </>,
    ],
    stack: [<>React</>, <>Next JS</>, <>Tailwind CSS</>],
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
