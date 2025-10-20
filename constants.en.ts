import type { SkillLevel } from './types';

export const CAREER_PATH_DATA_EN: SkillLevel[] = [
  {
    level: 1,
    title: "Junior Developer I",
    experience: "0-6",
    goal: "Understand the fundamental concepts of web development, build basic UI components, and learn to collaborate effectively in a team using Git.",
    hardSkills: [
      "Understanding basic web concepts (HTTP/HTTPS, DNS)",
      "Mastery of Semantic HTML",
      "Proficiency in CSS fundamentals (Flexbox, Grid, Selectors, Box Model)",
      "Familiarity with Git and basic commands (commit, push, pull, clone)",
      "Ability to build basic React components with essential hooks (useState, useEffect)",
      "Experience with a UI library (e.g., MUI or TailwindCSS)",
      "Basic understanding of testing and writing simple End-to-End tests (e.g., Cypress)",
      "Ability to use TypeScript for defining basic types",
      "Understanding the Event Loop and mastery of common array methods in JS",
      "Ability to manage simple state with Context API and the useReducer hook",
      "Basic experience with charting libraries (e.g., Chart.js)",
    ],
    softSkills: [
      "Learning to collaborate in small teams",
      "Familiarity with Agile and Scrum processes",
      "Asking clear and timely questions",
      "Accepting feedback and showing curiosity",
    ],
    responsibilities: [
      "Assisting in the development of simple UI features under supervision",
      "Fixing specified bugs",
      "Actively participating in daily team meetings",
      "Writing initial documentation for created components",
    ],
    roadmap: {
        months: [
            "Months 1-2: Focus on HTML, CSS, and JS. Build static pages, fully understand Flexbox and Grid, and work with the DOM.",
            "Months 3-4: Deep dive into React. Focus on JSX, components, State, Props, and the component lifecycle.",
            "Months 5-6: Work with Git in a team project. Learn basic TypeScript and connect to simple APIs.",
        ],
        goals: [
            "Ability to fully explain the Request/Response cycle.",
            "Ability to convert a simple design (e.g., from Figma) into a responsive web page.",
            "Complete understanding of how to manage state at the component level.",
            "Ability to use Git to contribute to a project without creating conflicts.",
        ]
    },
    practicalTasks: [
        "Build a fully responsive personal portfolio page with HTML/CSS.",
        "Create a simple Weather App with React that fetches data from a public API.",
        "Implement a registration form with basic validation (required fields).",
        "Clone a small project from GitHub, create a new branch, make a small change, and open a Pull Request."
    ],
    quizzes: [
        "What is the difference between `==` and `===` in JavaScript?",
        "Explain the Box Model in CSS and what `box-sizing: border-box` does.",
        "What is the purpose of the `useEffect` hook in React, and how does its dependency array work?",
        "What is the difference between `localStorage` and `sessionStorage`?",
    ],
    evaluation: [
        "Ability to deliver small tasks within the set timeframe.",
        "Readable code that follows the team's basic standards.",
        "Ability to debug simple issues using DevTools.",
        "Active participation in Code Reviews (as a learner).",
    ],
    resources: [
        "MDN Web Docs",
        "freeCodeCamp.org",
        "React Official Docs",
        "CSS-Tricks",
        "JavaScript.info"
    ],
    timeEstimate: {
        fullTime: "3-4 Months",
        partTime: "5-6 Months",
    }
  },
  {
    level: 2,
    title: "Junior Developer II",
    experience: "6-12",
    goal: "Independently develop features with moderate complexity, master component styling, and write reliable End-to-End tests.",
    hardSkills: [
        "Working with Branches in Git (creating, merging, and reviewing feature branches)",
        "Experience building several serious projects with React",
        "Mastery of component styling and customization (MUI, Styled Components, etc.)",
        "Practical experience in writing End-to-End tests",
        "Familiarity with basic frontend Design Patterns",
        "Advanced use of TypeScript (Interfaces, Generics, Enums)",
        "Deep understanding of Asynchronous concepts in JS (Promises, async/await)",
        "Basic Functional Programming in JS",
        "Working with more complex and customizable charts (e.g., Recharts)",
    ],
    softSkills: [
        "Effective work experience in larger teams",
        "Managing personal tasks in Scrum sprints",
        "Clear communication about Blockers",
        "Starting to ask 'why' behind technical decisions"
    ],
    responsibilities: [
        "Independent development of features with moderate complexity",
        "Performing basic Code Reviews for teammates",
        "Assisting in the onboarding process for newer hires",
        "Improving existing features based on feedback",
    ],
    roadmap: {
        months: [
            "Months 1-2: Focus on advanced TypeScript and converting a JS project to TS.",
            "Months 3-4: Deep dive into styling strategies and building a small component library.",
            "Months 5-6: Work with a global state management tool like Zustand or Redux Toolkit.",
        ],
        goals: [
            "Ability to write Type-Safe and maintainable code.",
            "Increasing development speed by using reusable components.",
            "Understanding the challenges of state management in larger applications.",
            "Writing reliable E2E tests for main user scenarios.",
        ]
    },
    practicalTasks: [
        "Build a small component library (e.g., Button, Input, Modal) with TypeScript and Storybook.",
        "Create a simple Shopping Cart application using Zustand to manage the cart's state.",
        "Write comprehensive E2E tests with Cypress or Playwright for a complex login and registration form.",
        "Implement a simple dashboard with interactive charts using Recharts.",
    ],
    quizzes: [
        "What is the difference between an Interface and a Type in TypeScript, and when do we use each?",
        "Provide an example of using Generics in TypeScript for a generic fetch function.",
        "What are the advantages of using a state management tool like Zustand over Context API?",
        "How can you prevent unnecessary re-renders in React? (Mention `React.memo`)",
    ],
    evaluation: [
        "Ability to develop a feature from start to finish with minimal supervision.",
        "Quality of performed Code Reviews (finding simple logical bugs).",
        "Active participation in sprint planning meetings and providing initial estimates.",
        "Code written rarely requires major rewriting.",
    ],
    resources: [
        "TypeScript Handbook",
        "Refactoring UI (Book)",
        "Testing Library Docs",
        "Zustand GitHub Page",
    ],
    timeEstimate: {
        fullTime: "4 Months",
        partTime: "6 Months",
    }
  },
    {
    level: 3,
    title: "Mid-Level Developer I",
    experience: "12-18",
    goal: "Take ownership of features, optimize application performance, and contribute to API design while ensuring code quality through robust testing.",
    hardSkills: [
        "Ability to resolve conflicts and use Rebase in Git",
        "Ability to optimize performance in React (memo, useMemo, useCallback)",
        "Practical experience with advanced State Management tools (Redux Toolkit or Zustand)",
        "Writing Unit and Integration tests (with Jest/RTL)",
        "Implementing software design patterns in practice",
        "Configuring and using TypeScript in Strict Mode",
        "Advanced responsive implementation with Media Queries",
        "Familiarity with Web Components and their applications",
        "Practical experience with Storybook for component development and documentation",
    ],
    softSkills: [
        "Active participation in team problem-solving",
        "Providing constructive feedback in technical meetings",
        "Starting to estimate task durations with guidance",
        "Ability to explain technical issues to non-technical people (in simple terms)",
    ],
    responsibilities: [
        "Technical ownership in the development of medium-sized features",
        "Close collaboration with the backend team for API design",
        "Contributing to UI/UX improvements",
        "Breaking down large tasks into smaller, manageable ones",
    ],
    roadmap: {
        months: [
            "Months 1-2: Master Redux Toolkit and fully understand its architecture.",
            "Months 3-4: Deep focus on performance optimization, using the Profiler and lazy loading.",
            "Months 5-6: Learn and implement Unit and Integration tests for complex business logic.",
        ],
        goals: [
            "Ability to manage complex and asynchronous state at the application level.",
            "Writing optimal code and identifying performance bottlenecks.",
            "Ensuring code stability with adequate test coverage for critical parts.",
            "Ability to resolve complex Merge Conflicts in Git.",
        ]
    },
    practicalTasks: [
        "Build a small online store application with Redux Toolkit and RTK Query for server communication.",
        "Virtualize a long list (1000+ items) using `react-window` or `tanstack-virtual`.",
        "Write comprehensive Unit tests for a complex Custom Hook with React Testing Library.",
        "In a project, clean up a Feature Branch using Interactive Rebase and then rebase it onto Main."
    ],
    quizzes: [
        "When do we use `useMemo` versus `useCallback`? Provide examples.",
        "What is a Thunk in Redux, and what problem does it solve?",
        "Explain the difference between Unit, Integration, and End-to-End tests with examples.",
        "Why is DRY (Don't Repeat Yourself) not always a good principle?",
    ],
    evaluation: [
        "Ability to choose the right tool for state management based on project needs.",
        "Tangible performance improvements in parts of the application (measurable with Lighthouse).",
        "Increased Test Coverage in important project areas.",
        "Constructive participation in API design with the backend team.",
    ],
    resources: [
        "Redux Toolkit Official Docs",
        "React Docs on Performance Optimization",
        "Kent C. Dodds' Blog on Testing",
        "Atlassian Git Tutorials (Advanced)",
    ],
    timeEstimate: {
        fullTime: "4 Months",
        partTime: "6 Months",
    }
  },
  {
    level: 4,
    title: "Mid-Level Developer II",
    experience: "18-24",
    goal: "Master server-side rendering with Next.js, implement efficient data fetching strategies, and begin mentoring junior developers.",
    hardSkills: [
        "Familiarity with Git workflows (like Git Flow)",
        "Mastery of Next.js and its key concepts (SSR, SSG, API Routes, Image Optimization)",
        "Experience with data fetching and caching libraries (like React Query / TanStack Query)",
        "Familiarity with CI/CD pipelines and automated test execution",
        "Understanding and applying SOLID principles in software development",
        "Deep understanding of how pages render in the browser (Critical Rendering Path)",
        "Ability to implement smooth animations with CSS and related libraries (like Framer Motion)",
        "Experience with WebSockets for Real-time communication",
        "Familiarity with Data Visualization basics (working with basic D3.js)",
    ],
    softSkills: [
        "Time management and task prioritization in projects",
        "Mentoring junior developers",
        "Balancing clean code against timely project delivery",
        "Regularly reviewing own work before submitting for Review",
    ],
    responsibilities: [
        "Designing and developing reusable components at the company level",
        "Optimizing page load speed",
        "Active participation in System Design meetings",
        "Leading the technical development of a small feature or module",
    ],
    roadmap: {
        months: [
            "Months 1-3: Fully learn Next.js and implement a Full-stack project with it.",
            "Months 4-5: Master TanStack Query and complex caching and invalidation strategies.",
            "Month 6: Get familiar with CI/CD and implement a simple pipeline with GitHub Actions for testing and building.",
        ],
        goals: [
            "Ability to build applications optimized for SEO and performance.",
            "Efficiently manage server-side requests and reduce the load on the backend.",
            "Automating testing and deployment processes.",
            "Ability to mentor a junior developer on a specific task.",
        ]
    },
    practicalTasks: [
        "Build a blog with Next.js that uses SSG for posts and SSR for previews in the admin panel.",
        "Implement a page with Optimistic Updates using TanStack Query.",
        "Set up a pipeline in GitHub Actions that runs tests and deploys the project to Vercel after every Push.",
        "Implement a complex component with meaningful animations using Framer Motion.",
    ],
    quizzes: [
        "What is the difference between SSR and SSG in Next.js, and for which scenario is each suitable?",
        "Why is using a library like TanStack Query better than `useEffect` for fetching data?",
        "Explain the Critical Rendering Path step by step.",
        "Provide an example of the Open/Closed Principle from SOLID in React.",
    ],
    evaluation: [
        "Ability to decide on the rendering strategy (SSR/SSG/CSR) for different parts of the application.",
        "Reducing page load times and improving Lighthouse scores to above 90.",
        "The degree of help provided to the technical growth of junior developers on the team.",
        "The quality of documentation written for Reusable components.",
    ],
    resources: [
        "Next.js Official Docs",
        "TanStack Query Docs",
        "web.dev by Google",
        "GitHub Actions Documentation",
        "Framer Motion Docs",
    ],
    timeEstimate: {
        fullTime: "5 Months",
        partTime: "7 Months",
    }
  },
  {
    level: 5,
    title: "Mid-Level Developer III",
    experience: "24-30",
    goal: "Tackle complex architectural patterns like Micro-Frontends, master advanced TypeScript, and take ownership of critical features from design to deployment.",
    hardSkills: [
        "Familiarity with Micro-Frontends architecture and experience with Monorepos (e.g., Turborepo)",
        "Experience integrating GraphQL with React (with Apollo Client or urql)",
        "Familiarity with performance testing tools (Lighthouse, WebPageTest)",
        "Mastery of Clean Code principles and ability to refactor complex code",
        "Using advanced TypeScript patterns (Conditional Types, Mapped Types)",
        "Advanced debugging skills and application-level error management (Error Boundaries)",
        "Responsive design for various devices and platforms",
        "Practical experience in Data Visualization (working with SVG and Canvas)",
    ],
    softSkills: [
        "Ability to lead small technical meetings",
        "Skill in resolving technical conflicts within the team",
        "Systemic thinking and anticipating Technical Debt",
        "Effective communication with product managers and designers",
    ],
    responsibilities: [
        "Full ownership of developing complex and challenging features",
        "Performing detailed Code Reviews and providing deep feedback",
        "Contributing to defining the project's technical roadmap",
        "Conducting technical interviews with junior and mid-level candidates",
    ],
    roadmap: {
        months: [
            "Months 1-2: Learn GraphQL and its differences with REST. Work with Apollo Client.",
            "Months 3-4: Deep study of Clean Code and Refactoring. Rewrite a complex part of a project.",
            "Months 5-6: Get familiar with Micro-Frontends architecture and set up a sample project with a Monorepo.",
        ],
        goals: [
            "Ability to work in large projects with modern architectures.",
            "Improving the quality and readability of the existing codebase.",
            "Reducing dependencies and increasing team autonomy in large projects.",
            "Ability to identify and evaluate suitable candidates for the team.",
        ]
    },
    practicalTasks: [
        "Build a project using a GraphQL API (e.g., GitHub API) with Apollo Client.",
        "Select a module with messy and complex code and refactor it following Clean Code principles (with before and after documentation).",
        "Create a Monorepo with Turborepo that includes two applications (Micro-Frontends) and a shared UI package.",
        "Create a custom Error Boundary for your application that sends errors to a logging service.",
    ],
    quizzes: [
        "What are the pros and cons of Micro-Frontends?",
        "What is the N+1 Query problem in GraphQL and how is it solved?",
        "Name and explain a few principles from Clean Code.",
        "What is the difference between a Monorepo and a Polyrepo? When do we use a Monorepo?",
    ],
    evaluation: [
        "Ability to defend technical decisions in meetings and document them.",
        "Measurable improvement in code quality (e.g., reduction in cyclomatic complexity) after refactoring.",
        "Correct understanding of the challenges of working with Monorepos and Micro-Frontends.",
        "Ability to lead a constructive Code Review session.",
    ],
    resources: [
        "Clean Code by Robert C. Martin (Book)",
        "micro-frontends.org",
        "Apollo Client Docs",
        "Turborepo Docs",
    ],
    timeEstimate: {
        fullTime: "5 Months",
        partTime: "7 Months",
    }
  },
    {
    level: 6,
    title: "Senior Developer I",
    experience: "30-36",
    goal: "Lead technical projects, drive improvements in development processes, and design robust systems like a Design System while actively mentoring mid-level developers.",
    hardSkills: [
      "Using advanced Git commands (cherry-pick, git hooks)",
      "Ability to design and implement a basic Design System",
      "Designing and implementing complex Real-time systems with WebSockets",
      "Deep understanding of frontend security issues (XSS, CSRF) and authentication protocols (OAuth, JWT)",
      "Familiarity with TDD/DDD concepts and their application in frontend",
      "Ability to analyze and optimize Bundle Size (Code Splitting, Tree Shaking)",
      "Familiarity with 3D graphics on the web (basic Three.js)",
      "Building fully custom charts with D3.js",
    ],
    softSkills: [
      "Ability to make and defend important technical decisions",
      "Actively mentoring Mid-level developers",
      "Technical leadership and removing obstacles for others",
      "Initiative in proposing improvements and changes",
    ],
    responsibilities: [
      "Technical leadership in medium to large projects",
      "Researching, evaluating, and presenting (PoC) for new technologies",
      "Improving team development processes (CI/CD, Code Review, Testing)",
      "Active participation in the hiring and technical interview process",
    ],
    roadmap: {
      months: [
        "Months 1-2: Focus on security issues and implementing defensive mechanisms.",
        "Months 3-4: Design and build a small Design System with Storybook and publish it as a package.",
        "Months 5-6: Deep dive into D3.js and build a complex and interactive data visualization.",
      ],
      goals: [
        "Ability to build secure and reliable applications.",
        "Creating harmony and standards in the UI of all products.",
        "Ability to display complex data in a visual and understandable way.",
        "Ability to lead a small team to deliver a project.",
      ]
    },
    practicalTasks: [
      "Implement a simple chat application with JWT-based authentication and Real-time communication with WebSockets.",
      "Add a bundle analysis tool (like `webpack-bundle-analyzer`) to a project and reduce its size by at least 20%.",
      "Create an interactive map of a country using D3.js that displays information when hovering over each state/province.",
      "Define a `pre-commit` hook with Husky for the project that lints and formats the code before commit.",
    ],
    quizzes: [
      "What is the difference between XSS and CSRF, and how can they be prevented?",
      "What is Code Splitting and what types does it have? (Route-based vs Component-based)",
      "Describe the steps of a Design System from design to implementation.",
      "What is the difference between Test-Driven Development (TDD) and Behavior-Driven Development (BDD)?",
    ],
    evaluation: [
      "Ability to identify and fix security vulnerabilities in the code.",
      "The degree of adoption and use of the Design System by the team.",
      "Effective mentoring and contributing to the growth of others (visible in their performance).",
      "The quality and impact of proposed improvements in team processes.",
    ],
    resources: [
      "OWASP Top Ten for Web Applications",
      "D3.js in Depth",
      "Design Systems Handbook by InVision",
      "Webpack Documentation on Code Splitting",
    ],
    timeEstimate: {
      fullTime: "Continuous Learning",
      partTime: "Continuous Learning",
    }
  },
  {
    level: 7,
    title: "Senior Developer II",
    experience: "36-42",
    goal: "Architect scalable and maintainable systems, lead major technical initiatives, and align frontend strategy with business goals.",
    hardSkills: [
      "Ability to build Progressive Web Apps (PWA) with offline support (Service Workers)",
      "Ability to design and optimize state management structure in large applications",
      "Mastery of advanced E2E testing tools (like Playwright)",
      "Deep understanding of software architecture principles and implementing Micro-Frontends",
      "Familiarity with how JavaScript engines work (like V8)",
      "Implementing simple 3D visualizations with Three.js",
      "Performance optimization in Data Visualization",
    ],
    softSkills: [
      "Ability to technically manage a small team (3-5 people)",
      "Skill in presenting technical topics to different audiences (technical and non-technical)",
      "Strategic thinking and aligning technology with business objectives",
      "Resolving technical disputes and building consensus in the team",
    ],
    responsibilities: [
      "Designing the architecture of scalable and maintainable systems",
      "Solving complex, multifaceted technical problems that require research",
      "Collaborating with product and project managers to define long-term strategy",
      "Technical ownership of one or more critical subsystems",
    ],
     roadmap: {
      months: [
        "Months 1-2: Deep dive into Service Workers and build a complete PWA with Push Notification capabilities.",
        "Months 3-4: Study software architecture patterns and design the architecture for a real project.",
        "Months 5-6: Work with Playwright and write reliable E2E tests for a complex workflow.",
      ],
      goals: [
        "Ability to build applications with a near-native user experience.",
        "Designing systems that are easily scalable in the future and create minimal technical debt.",
        "Ensuring the correct functioning of the application in complex user scenarios automatically.",
        "Ability to translate business requirements into technical solutions.",
      ]
    },
    practicalTasks: [
      "Convert a news application into a PWA with offline reading capabilities and push notifications.",
      "Design and document the frontend architecture for a large application like Trello (with diagrams and explanations).",
      "Automate a complete shopping scenario on an e-commerce site (from search to payment) with Playwright.",
      "Analyze the Garbage Collection performance in a React application using Chrome DevTools and fix a memory leak.",
    ],
    quizzes: [
      "Explain the lifecycle of a Service Worker and name its Caching strategies.",
      "What is the CQRS pattern, and how can it be applied in the frontend (e.g., with Redux)?",
      "What is the difference between the V8 and SpiderMonkey engines, and how does JIT Compilation work?",
      "How do you design a Micro-Frontends architecture for a large project? (from technical and organizational aspects)",
    ],
    evaluation: [
      "The quality, completeness, and feasibility of the designed architecture documentation.",
      "The stability and reliability of the E2E tests written in the CI/CD pipeline.",
      "Ability to present a complex technical topic to senior management in a simple and understandable way.",
      "The rate of reduction in reported bugs in modules under your ownership.",
    ],
    resources: [
      "MDN on Progressive Web Apps",
      "Playwright Docs",
      "Software Architecture Patterns by Mark Richards (Book)",
      "v8.dev blog",
    ],
    timeEstimate: {
      fullTime: "Continuous Learning",
      partTime: "Continuous Learning",
    }
  },
    {
    level: 8,
    title: "Senior Developer III",
    experience: "42-48",
    goal: "Drive innovation by introducing new technologies, set technical standards across the team, and solve crises with expertise and composure.",
    hardSkills: [
      "Mastery of Git history optimization (squash, fixup, interactive rebase)",
      "Experience with Serverless platforms for the frontend (Vercel, AWS Amplify)",
      "Ability to create and publish NPM packages",
      "Mastery of advanced security concepts and implementation of defensive measures (CSP, XSS Prevention)",
      "Authority on Clean Code principles and ability to mentor others",
      "Familiarity with WebGL basics for 2D and 3D graphics",
      "Practical experience in projects with Three.js",
      "Experience working with large-scale data visualization",
    ],
    softSkills: [
      "Leading the team technically and guiding the technology path",
      "Contributing to the project's technical strategy formulation",
      "Technical influence beyond one's own team",
      "Mentoring and developing senior talent",
    ],
    responsibilities: [
      "Overall architecture of the application's frontend layer",
      "Innovating and introducing new tools and processes",
      "Setting coding and architectural standards within the team",
      "Technical crisis management (Firefighting)",
    ],
    roadmap: {
      months: [
        "Months 1-2: Create and publish a useful NPM package and maintain it.",
        "Months 3-4: Implement a project with Three.js to display complex 3D models.",
        "Months 5-6: Research and present on an emerging technology (like WebAssembly) and build a PoC.",
      ],
      goals: [
        "Influencing the developer community by sharing code.",
        "Expanding the boundaries of user experience with 3D graphics.",
        "Keeping the team up-to-date with the latest technologies and assessing their risks and benefits.",
        "Reducing response time to technical incidents and problems.",
      ]
    },
    practicalTasks: [
      "Create a custom React hook for managing complex forms and publish it as an NPM package.",
      "Build a 3D product viewer with Three.js that allows the user to change materials and colors.",
      "Implement a strict Content Security Policy (CSP) for an application and monitor its reports.",
      "Write a 'Postmortem' for a recent technical issue and provide solutions to prevent its recurrence.",
    ],
    quizzes: [
      "What's the difference between `git rebase` and `git merge`, and how does the Git Flow strategy use them?",
      "How does Content Security Policy (CSP) work, and what are its important directives?",
      "Explain the concepts of Scene, Camera, and Renderer in Three.js.",
      "When does it make sense to use Serverless Functions (like Vercel Functions) for a frontend application?",
    ],
    evaluation: [
      "The usage and feedback of the published NPM package.",
      "Ability to solve complex problems that require innovative and out-of-the-box solutions.",
      "Influence on technical decisions at the level of multiple teams.",
      "Success in technically leading a project from inception to completion.",
    ],
    resources: [
      "NPM Docs on Publishing Packages",
      "Three.js Journey (Course)",
      "MDN on Content Security Policy (CSP)",
      "Serverless Handbook",
    ],
    timeEstimate: {
      fullTime: "Continuous Learning",
      partTime: "Continuous Learning",
    }
  },
  {
    level: 9,
    title: "Lead Developer",
    experience: "48-54",
    goal: "Lead a team of engineers, ensuring high-quality delivery while fostering individual growth and aligning the team's technical direction with product goals.",
    hardSkills: [
      "Technical management of a team (5-10 people)",
      "Experience creating and maintaining widely-used libraries (50+ stars)",
      "Experience integrating AI models into UI (e.g., building chat interfaces)",
      "Implementing and monitoring Clean Code standards within the team",
      "Designing TypeScript architecture in large projects",
      "Deep optimizations for scalability",
      "Experience with 3D models in Three.js",
      "Mastery of the entire Data Visualization process (from data ingestion to rendering)",
    ],
    softSkills: [
      "Full team management and individual development of members",
      "Creating alignment between different teams (tech, product, design)",
      "Negotiation and persuasion skills",
      "Crisis management and decision-making under pressure",
    ],
    responsibilities: [
      "Leading the development team and overseeing technical performance",
      "Making high-level and strategic technical decisions",
      "Managing performance and professional growth of team members",
      "Ultimate responsibility for project delivery",
    ],
    roadmap: {
         months: [
        "Month 1-2: Review and improve current team project architectures, define coding standards, and establish Code Review processes.",
        "Month 3-4: Plan and execute a mid-size project with the team, focusing on dependency management and code quality improvements.",
        "Month 5-6: Implement a monitoring system and KPIs to evaluate team performance and member growth, providing continuous feedback."
      ],
        goals: [
            "Empowering team members and supporting their professional growth.",
            "Ensuring technical decisions are aligned with business objectives.",
            "Creating a positive, inclusive, and efficient engineering culture.",
            "Recruiting and retaining top talent.",
        ]
    },
    practicalTasks: [
        "Develop and track a Personal Development Plan (PDP) for each member of your team.",
        "Design a technical roadmap for the next quarter and defend it in front of senior management.",
        "Review the team's Code Review process and improve it by introducing new tools or rules.",
        "Hold a technical 'All Hands' meeting for your team and present the future technical vision.",
    ],
    quizzes: [
        "How do you evaluate the performance of a software engineer?",
        "How do you balance technical debt against developing new features?",
        "Describe a difficult management situation you've had and how you resolved it.",
        "How do you re-engage a demotivated team member?",
    ],
    evaluation: [
        "The growth and advancement of team members (their promotions).",
        "Success in delivering projects on time and with high quality.",
        "The satisfaction, motivation, and retention rate of team members.",
        "Ability to hire the right people for the team.",
    ],
    resources: [
        "The Manager's Path by Camille Fournier (Book)",
        "An Elegant Puzzle by Will Larson (Book)",
        "LeadDev (Conference and Website)",
        "Radical Candor by Kim Scott (Book)",
    ],
    timeEstimate: {
        fullTime: "Management Role",
        partTime: "Management Role",
    }
  },
  {
    level: 10,
    title: "Principal Engineer",
    experience: "54-60",
    goal: "Act as a top-tier technical expert who influences the entire organization, solves the most complex challenges, and mentors other technical leaders.",
    hardSkills: [
      "Ability to build complex libraries (e.g., custom State Management tool)",
      "Experience technically managing large teams (10+ people)",
      "Mastery of various aspects of Data Visualization and Three.js",
      "Familiarity with WebAssembly and its applications",
      "Experience integrating visualizations with Machine Learning models",
    ],
    softSkills: [
      "Technical leadership at the organizational level (not just the team)",
      "Mentoring other technical leaders",
      "Communicating with and influencing senior executives (C-level)",
      "Long-term strategic thinking (3-5 years ahead)",
    ],
    responsibilities: [
      "Designing technical architecture at the organizational and inter-team level",
      "Providing technical consultation to senior executives and the CEO",
      "Solving the company's most complex and high-risk technical problems",
      "Representing the company technically at conferences and professional forums",
    ],
     roadmap: {
       months: [
        "Month 1-2: Evaluate existing technologies in the organization and identify weaknesses and opportunities for architectural improvements.",
        "Month 3-4: Design a Proof-of-Concept for a complex system and assess its scalability and maintainability.",
        "Month 5-6: Develop technical standards and patterns for all teams and establish a mentoring process for technical leaders."
      ],
        goals: [
            "Solving the organization's most complex technical challenges.",
            "Setting long-term technological directions.",
            "Increasing the organization's technical influence within the industry.",
            "Standardizing and improving architecture across the entire company.",
        ]
    },
    practicalTasks: [
        "Build a Proof-of-Concept for using WebAssembly for a heavy computation task on the frontend and present its benefits quantitatively.",
        "Publish a deep technical article on the company blog that becomes known as a reference in the industry.",
        "Launch a mentorship program for younger technical leaders within the organization.",
        "Design and document a Reference Architecture for new frontend projects in the company.",
    ],
    quizzes: [
        "How do you evaluate a new technology for use across the entire organization?",
        "What was the biggest technical challenge you have faced, and how did you solve it?",
        "How do you balance innovation and stability in the architecture of a large system?",
        "What is the difference between the role of a Principal Engineer and an Engineering Manager?",
    ],
    evaluation: [
        "The degree of influence on the macro-architecture of systems.",
        "Ability to solve problems that others are unable to solve.",
        "Recognition as a technical authority inside and outside the organization.",
        "The number and quality of engineers who have been mentored by you and reached senior levels.",
    ],
    resources: [
        "Staff Engineer by Will Larson (Book)",
        "Designing Data-Intensive Applications by Martin Kleppmann (Book)",
        "WebAssembly Official Docs",
        "InfoQ / Martin Fowler's Blog",
    ],
    timeEstimate: {
        fullTime: "Strategic Role",
        partTime: "Strategic Role",
    }
  },
  {
    level: 11,
    title: "Front-End Expert",
    experience: "60-66",
    goal: "Become a thought leader who shapes the company's technical brand and drives industry-level innovation.",
    hardSkills: [
      "Creating and maintaining successful open-source libraries (100+ stars)",
      "Complete mastery of the visualization ecosystem (Three.js + WebGL)",
      "Experience managing multiple technical teams",
    ],
    softSkills: [
      "Ability to formulate the organization's technical vision",
      "Networking and active presence in the technical community",
      "Ability to inspire and motivate at the organizational level",
      "Critical thinking and challenging the status quo",
    ],
    responsibilities: [
      "Leading technical innovations at the company level",
      "Setting technical standards in the industry",
      "Shaping the company's engineering culture",
      "Attracting key and strategic talent",
    ],
    roadmap: {
        months: [
        "Month 1-2: Deliver talks and publish technical articles to establish yourself as an industry thought leader.",
        "Month 3-4: Lead open-source projects and collaborate with other teams to improve front-end standards in the developer community.",
        "Month 5-6: Develop a long-term technical vision for the company and influence product strategy and architecture."
      ],
        goals: [
            "Shaping the future of technology in your area of expertise.",
            "Influencing the global developer community.",
            "Creating a lasting technical legacy for the company.",
            "Becoming a thought leader in the industry.",
        ]
    },
    practicalTasks: [
        "Deliver a Keynote speech at an international conference.",
        "Lead a successful open-source project that is used by other companies.",
        "Develop a 3-year technical vision for the company and get buy-in from senior management.",
        "Write a White Paper on a significant technical challenge and your innovative solution.",
    ],
    quizzes: [
        "How do you predict the future of frontend technology in the next 5 years?",
        "How do you create a culture of innovation in a large organization?",
        "What is the most important principle you have learned throughout your career?",
    ],
    evaluation: [
        "The number of citations to your work in the industry (articles, talks, projects).",
        "The success of your open-source projects and their adoption rate.",
        "The degree of adoption and implementation of your technical vision by the organization.",
        "The number and quality of technical leaders you have nurtured.",
    ],
    resources: [
        "Active participation in conferences and online communities (GitHub, Twitter, etc.)",
        "Writing books or advanced training courses",
        "Connecting with other thought leaders in the industry",
    ],
    timeEstimate: {
        fullTime: "Strategic Role",
        partTime: "Strategic Role",
    }
  },
  {
    level: 12,
    title: "Front-End Architect (God of Frontend)",
    experience: "66-72+",
    goal: "Define and govern the entire technical ecosystem, ensuring long-term scalability, sustainability, and strategic alignment with the business.",
    hardSkills: [
        "Creating and maintaining highly successful libraries (200+ stars)",
        "Designing and building multiple complex libraries (custom State Mgmt, UI Framework)",
        "Complete and deep mastery of Data Visualization and 3D graphics",
        "Experience managing large technical organizations",
    ],
    softSkills: [
        "Strategic technical leadership across the entire company",
        "Widespread influence on the software industry",
        "Ability to build and lead teams of leaders",
        "Product and business vision",
    ],
    responsibilities: [
        "Architecting the entire technical ecosystem of the company",
        "Guiding digital and technological transformation",
        "Attracting and nurturing top-tier talent globally",
        "Making decisions on major technical investments",
    ],
    roadmap: {
         months: [
        "Month 1-2: Analyze and redesign the company's front-end ecosystem to improve scalability and productivity.",
        "Month 3-4: Lead strategic organization-wide projects, including migrations and creating internal frameworks.",
        "Month 5-6: Document architecture and establish a mentoring program for company technical leaders to create a long-term legacy."
      ],
        goals: [
            "Designing systems that will be stable and scalable for the next decade.",
            "Inspiring the next generation of engineers and software architects.",
            "Solving problems that previously seemed unsolvable.",
            "Balancing technical, product, and business goals at the highest level.",
        ]
    },
    practicalTasks: [
        "Design an in-house frontend framework for the entire organization that significantly increases productivity.",
        "Lead a major technical transformation in the company (e.g., migrating from a monolith to micro-services/frontends).",
        "Write an influential book that becomes a primary reference in your field of expertise.",
        "Participate on the board of directors or technical advisory committees for other startups.",
    ],
    quizzes: [
        "How do you design an architecture that evolves as the company grows?",
        "What was the biggest technical mistake you made in your career, and what did you learn from it?",
        "How do you measure the success of a major technical transformation?",
    ],
    evaluation: [
        "The long-term success and stability of the systems you designed.",
        "Influence on the trajectory of the entire software industry.",
        "The legacy you leave behind: people, systems, and ideas.",
        "Business growth and success directly linked to your technical decisions.",
    ],
    resources: [
        "Experience, deep thought, and collaboration with the greatest minds in the industry.",
        "Studying fields beyond technology (economics, psychology, management).",
    ],
    timeEstimate: {
        fullTime: "Strategic Role",
        partTime: "Strategic Role",
    }
  },
];
