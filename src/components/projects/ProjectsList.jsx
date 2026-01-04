import talkbox from "../../assets/images/projects/TalkBoxPicture.png";
import tictactoe from "../../assets/images/projects/Tic-Tac-Toe-Picture.png";
import smartBudgetingTool from "../../assets/images/projects/SmartBudgetingTool.png";
import passwordManager from "../../assets/images/projects/PasswordManager.png";
import zipEditor from "../../assets/images/projects/ZipEditor.png";

export const projects = [
  {
    id: 1,
    title: "Password Manager",
    description:
      "A local password manager which you can interact with using the command line.",
    longDescription:
      "A password manager in C++ utilizing a substitution cipher to encrypt and store passwords locally on the disk, providing users a free alternative to third party applications storing data on the cloud.",
    image: passwordManager,
    technologies: ["C++", "CLI"],
    github: "https://github.com/Satinder-Sikand/PasswordManager",
    demo: "",
    category: "Back End",
  },
  {
    id: 2,
    title: "Smart Budgeting Tool",
    description: "A web app to simplify personal finance management.",
    longDescription:
      "An angular app to help separate finances and see how much money is going where. Expenses can be grouped, and calculations are automatically done per group and total. Presented in a user-friendly UI.",
    image: smartBudgetingTool,
    technologies: ["Angular", "JavaScript"],
    github: "https://github.com/Satinder-Sikand/personal-finance-tracker",
    demo: "https://satinder-sikand.github.io/personal-finance-tracker/",
    category: "Web App",
  },
  {
    id: 3,
    title: "Zip File Editor",
    description: "A tool to help manipulate zip archives for testing purposes.",
    longDescription:
      "A Python project that enables users to easily manipulate files within a zip archive by adding or removing files. Meant to be used to test program decompression features and identify vulnerabilities.",
    image: zipEditor,
    technologies: ["Python", "CLI"],
    github: "https://github.com/Satinder-Sikand/Zip-Editor",
    demo: "",
    category: "Editor",
  },
  {
    id: 4,
    title: "TalkBot Simulator",
    description: "A project that serves as an assistive communication tool.",
    longDescription:
      "A Java project made for EECS2031. It is meant to serve as an assistive communication tool for those that face difficulty in attempting verbal speach. Users interact with the program by clicking on buttons representing specific sentences, phrases, and customizable messages.",
    image: talkbox,
    technologies: ["Java"],
    github: "https://github.com/Satinder-Sikand/2311Project",
    demo: "",
    category: "Desktop Application",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description: "A simple tic-tac-toe game.",
    longDescription:
      "A simple React web app to help learn the React framework.",
    image: tictactoe,
    technologies: ["React", "JavaScript"],
    github: "https://github.com/Satinder-Sikand/my-app",
    demo: "",
    category: "Web App",
  },
];
