// ========================== Profile
const profileData = {
  title: "Profile",
  descriptions: [
    `Front-End Developer with a solid foundation in computer science from BSU, complemented by over 2 years of freelance experience creating dynamic and responsive web applications.`,

    `Skilled in JavaScript and its frameworks, with proficiency in CSS frameworks like Bootstrap and Tailwind CSS to enhance user interfaces.`,

    `Successfully transitioned to Google, where I contribute to building high-performance web applications, focusing on user experience and accessibility.`,

    `Passionate about clean code and best practices, I have worked on various projects, collaborating with teams to deliver innovative solutions.`,
  ],
};

// ========================== Projects
const projectsData = {
  title: "Projects",
  projects: [
    {
      title: "Apispa",
      link: "apispa.com",
      describe:
        "Music Albums Explorer is a web application that allows users to browse albums, listen to music tracks, and get information about each album.",
      line: true,
    },
    {
      title: "Lamoda",
      link: "lamoda.com",
      describe:
        "Fashion Hub is a web application that allows users to browse, filter, and purchase clothing and accessories. The platform features a variety of brands and styles, providing a seamless shopping experience.",
      line: true,
    },
    {
      title: "Notion",
      link: "notion.com",
      describe:
        "Notion is a web application that allows users to create, manage, and organize their tasks efficiently. It provides a clean and intuitive interface for tracking daily activities and enhancing productivity.",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  skills: [
    [`Html`],
    [`Css`],
    [`Sass`],
    [`Tailwind`],
    [`Javascript`],
    [`Typescript`],
    [`React`],
    [`Next`],
    [`Redux`],
  ],
};
const logoText = "BACode";
const menuIcon = "bx-grid-alt";

// ========================= Experience
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Fleelance (Front-end Developer)",
      company: "2027-2029",
      describe:
        "Designed and developed responsive web applications using HTML, CSS, and TypeScript. Worked closely with clients to understand their requirements and deliver tailored solutions.",
      line: true,
    },
    {
      title: "Google (Front-end Developer)",
      company: "2029 - Present",
      describe:
        "Contributed to high-impact projects in a dynamic team environment. Partnered with cross-functional teams to deliver seamless user experiences. Created user-friendly interfaces with a focus on performance and accessibility.",
      line: false,
    },
  ],
};

// ========================= Languages
const languageData = {
  title: "Languages",
  languages: ["English - B2", "Belarusian - Native", "Russian - Native"],
};

export {
  logoText,
  menuIcon,
  profileData,
  projectsData,
  skillsData,
  experienceData,
  languageData,
};
