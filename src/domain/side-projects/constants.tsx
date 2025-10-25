import { ISideProject } from "./typing/interfaces-and-enums";



const ONE_WORD_PROJECT = 
  {
    label: "One Word",
    id: "one-word",
    githubUrl: "https://github.com/mariobrusarosco/one-word",
    url: "https://one-word-demo.mariobrusarosco.com/",
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
}


const ONE_WORD_API_PROJECT = {
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
}

const DIGITAL_GARDEN = {
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
};

const BEST_SHOT_API_PROJECT = {
  label: "Best Shot - API",
  id: "best-shot-api",
  githubUrl: "https://github.com/mariobrusarosco/api-best-shot",
  postmanUrl: "",
  url: "https://api-best-shot-demo.mariobrusarosco.com/",
  description: [
    <>
      Best Shot is a football prediction platform that allows users to compete
      with friends by guessing match results across major tournaments.
    </>,
  ],
  benefits: [
    <>
      I can apply{" "}
      <span className="text-blue-green-300">Domain-Driven Design</span>{" "}
      principles to organize a complex backend architecture with 8 distinct
      domains.
    </>,
    <>
      I can learn{" "}
      <span className="text-blue-green-300">web scraping techniques</span> with
      Playwright to fetch real-time football data from external sources.
    </>,
    <>
      I can practice{" "}
      <span className="text-blue-green-300">AWS services integration</span>{" "}
      (S3, Lambda, EventBridge Scheduler) for automated data processing.
    </>,
    <>
      I can implement{" "}
      <span className="text-blue-green-300">comprehensive CI/CD pipelines</span>{" "}
      with GitHub Actions for multi-environment deployments.
    </>,
    <>
      I can leverage{" "}
      <span className="text-blue-green-300">Zod for type-safe validation</span>{" "}
      and learn how to integrate it with OpenAPI documentation.
    </>,
  ],
  stack: [
    <>Node / Express</>,
    <>TypeScript</>,
    <>PostgreSQL</>,
    <>Drizzle ORM</>,
    <>
      Railway
      <span className="text-blue-green-300"> (Hosting)</span>
    </>,
    <>
      Playwright
      <span className="text-blue-green-300"> (Web Scraping)</span>
    </>,
    <>
      AWS S3, Lambda, Scheduler
      <span className="text-blue-green-300"> (Cloud Services)</span>
    </>,
    <>
      Zod
      <span className="text-blue-green-300"> (Schema Validation)</span>
    </>,
    <>
      Sentry
      <span className="text-blue-green-300"> (Error Tracking)</span>
    </>,
    <>
      Docker
      <span className="text-blue-green-300"> (Development Environment)</span>
    </>,
  ],
};

const BEST_SHOT_PROJECT = {
  label: "Best Shot",
  id: "best-shot",
  githubUrl: "https://github.com/mariobrusarosco/best-shot",
  url: "https://best-shot-staging.mariobrusarosco.com/",
  figmaUrl: "https://www.figma.com/file/KZ4tq3xzzz2CvWwijUZoRy/Side-Projects?type=design&node-id=919-4165&mode=design&t=NeIWW7N9vz1Wq7P7-0",
  description: [
    <>
      Best Shot is a football prediction application where users can create leagues,
      manage tournaments, and compete with friends by guessing match scores.
    </>,
  ],
  benefits: [
    <>
      I can simulate a <span className="text-blue-green-300">real-world application</span>,
      to validate premises and understand the pros and cons of{" "}
      <span className="text-blue-green-300">front-end patterns</span>, tools, and frameworks.
    </>,
    <>
      I can demonstrate <span className="text-blue-green-300">domain-driven
architecture</span>{" "}
      and how to structure a complex React application with multiple interconnected features.
    </>,
    <>
      I can practice <span className="text-blue-green-300">modern React patterns</span>{" "}
      including TanStack Router for file-based routing and TanStack Query for server state
management.
    </>,
    <>
      I can implement <span className="text-blue-green-300">advanced form handling</span>
      with React Hook Form and Zod validation in a production-ready application.
    </>,
  ],
  stack: [
    <>React 18</>,
    <>Typescript</>,
    <>TanStack Router <span className="text-blue-green-300">(File-based routing)</span></>,
    <>TanStack Query <span className="text-blue-green-300">(Server state)</span></>,
    <>Material-UI v7 <span className="text-blue-green-300">(Component library)</span></>,
    <>React Hook Form + Zod <span className="text-blue-green-300">(Forms &
validation)</span></>,
    <>Vite <span className="text-blue-green-300">(Build tool)</span></>,
    <>Vitest + Playwright <span className="text-blue-green-300">(Testing)</span></>,
    <>Auth0 <span className="text-blue-green-300">(Authentication)</span></>,
    <>AWS CloudFront + S3 <span className="text-blue-green-300">(Hosting)</span></>,
    <>GitHub Actions <span className="text-blue-green-300">(CI/CD)</span></>,
    <>Biome <span className="text-blue-green-300">(Linting & formatting)</span></>,
  ],
};

export const SIDE_PROJECTS: ISideProject[] = [
  BEST_SHOT_API_PROJECT,
  BEST_SHOT_PROJECT,
  DIGITAL_GARDEN,
];
