import AWSLogo from "../../assets/images/company-logos/aws-logo.png";
import CaseWareLogo from "../../assets/images/company-logos/CWI-logo.png";
import LassondeLogo from "../../assets/images/company-logos/lassonde_logo.jpg";
import RedwoodLogo from "../../assets/images/company-logos/Redwood_logo.png";
import UnifyAppsLogo from "../../assets/images/company-logos/unifyapps_logo.jpg";

export const experiencesList = [
  {
    company: "Redwood Software",
    title: "Java Full Stack Developer",
    period: "Dec 2025 - PRESENT",
    location: "Toronto, Canada",
    description: [
      "Integrating test cases for the company product into the CI/CD pipeline via Playwright Reporter interface and Github Actions",
      "Working on adding and maintaining features in the RMJ platform which is the main product of Redwood Software",
    ],
    skills: [
      "Java",
      "NodeJS",
      "TypeScript",
      "JavaScript",
      "Playwright",
      "Github Actions",
    ],
    logo: RedwoodLogo,
  },
  {
    company: "UnifyApps",
    title: "Software Development Engineer",
    period: "Feb 2025 - Dec 2025",
    location: "Toronto, Canada",
    description: [
      "Migrated in-memory services to streaming-based pipelines, enabling scalable file handling and reducing file processing time by ~60% through lowering memory usage and system strain",
      "Built scalable REST APIs to generate Excel files (1M+ rows) in under 5 minutes - achieving 30x faster generation",
      "Refactored core Java services to adopt asynchronous programming models and offload computation heavy tasks to underutilized Kubernetes managed microservices via Kafka, improving BE responsiveness during peak usage",
      "Utilized Redis/Mongo-backed session management for dynamic user-session handling with custom attributes for flexible client-specific access control",
      "Authored JUnit tests with Quarkus and Spring Boot to maintain high test coverage and prevent regressions during rollouts.",
    ],
    skills: [
      "Java",
      "Python",
      "Kafka",
      "Redis",
      "MongoDB",
      "SQL",
      "Kubernetes",
    ],
    logo: UnifyAppsLogo,
  },
  {
    company: "Lassonde",
    title: "Back End Developer (Contract)",
    period: "Jan 2023 - Aug 2023",
    location: "Toronto, Canada",
    description: [
      "Developed a comprehensive Django web app to allow clients to efficiently manage over 40GB of project inventory, students, and supervisor’s data through intuitive CRUD operations.",
      "Designed the initial SQL database schema – tables, columns, and relationships – to support scalable and normalized storage of project inventory, student records, and supervisor profiles.",
      "Implemented advanced filtering and search functionalities to streamline project discovery and organization resulting in a reduction of inventory-assessment turnaround of nearly 60%",
    ],
    skills: ["Python", "PostgreSQL", "Django", "Docker"],
    logo: LassondeLogo,
  },
  {
    company: "Amazon",
    title: "Software Development Engineer Intern",
    period: "May 2022 - Aug 2022",
    location: "Vancouver, Canada",
    description: [
      "Developed an internal tool utilizing AWS Lambda, Glue, Spark, SNS, and Athena/SQL to aggregate cross-account data into an S3 data lake, enabling queries on datasets over 100GB of data within minutes",
      "Created an AWS CDK codebase in TypeScript and Python to automate trigger and crawler setup in users' accounts, reducing turnaround deployment by 80%",
      "Reduced data query time by ~50%, leading to improved data-driven decisions and operational efficiency",
      "Authored Jest unit and integration tests using mocks to validate logic and safeguard against regressions in deployments",
    ],
    skills: ["AWS", "TypeScript", "Python", "SQL", "Jest"],
    logo: AWSLogo,
  },
  {
    company: "CaseWare International",
    title: "Front End Developer Intern",
    period: "May 2021 - Dec 2021",
    location: "Toronto, Canada",
    description: [
      "Redesigned existing classes to prevent memory leaks, resulting in 10% lower memory usage and a more responsive UI",
      "Collaborated with backend in creating APIs for new features, designing database interactions to persist form history and display versions and other insights using JavaScript and TypeScript",
      "Supported international development partners with 1-1 calls, walk-throughs, and best development practices",
    ],
    skills: ["AngularJS", "Angular 8", "TypeScript", "JavaScript"],
    logo: CaseWareLogo,
  },
];
