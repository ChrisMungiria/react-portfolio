export const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const description = ["A web developer", "A mobile app developer"];

export const techStacks = [
  {
    label: "HTML/CSS",
    description:
      "I have experience in building HTML/CSS web applications. From using HTML semantics, to CSS selectors and media queries, I am comfortable around web development.I have also taken to TailwindCSS since it reduces thinking time for class names😅.",
  },
  {
    label: "JavaScript",
    description:
      "Using JavaScript to interact with the browser elements, using event listeners which involves creating custom functions which run when the user interacts with page elements has helped me add functionality to web pages",
  },
  {
    label: "ReactJS",
    description:
      "ReactJS is a JavaScript framework that uses the power of JavaScript to create JSX code. I have been able to make component-based and modular web applications using this which has reduced development time drastically",
  },
  {
    label: "React Native",
    description:
      "React Native is a library built on the concepts of ReactJS. It is similar to Google’s Flutter, allowing one codebase to run on multiple devices. I have built some projects on React Native as an Expo managed project, including a fun IoT one😉",
  },
  {
    label: "Figma",
    description:
      "Not so much a tech stack but a platform I use to develop websites and applications. I am familiar with the various tools on the platform, to create designs to guide me through th development process.",
  },
];

export const projects = [
  {
    category: "React",
    name: "Car showcase project",
    tags: ["api", "front-end", "reactjs", "nextjs"],
    image: "./assets/car_showcase.png",
  },
  {
    category: "React",
    name: "Expense Tracker",
    tags: ["front-end", "redux", "reactjs"],
    image: "./assets/expense_tracker.png",
    link: "https://github.com/ChrisMungiria/expense-tracker",
  },
  {
    category: "React",
    name: "Image Gallery",
    tags: ["front-end", "reactjs", "api"],
    image: "./assets/image_gallery.png",
  },
  {
    category: "React Native",
    name: "Greenleaf",
    tags: ["iot", "react-native", "expo", "firebase"],
    image: "./assets/greenleaf.png",
    link: "https://github.com/ChrisMungiria/greenleaf",
  },
  {
    category: "React Native",
    name: "Live score",
    tags: ["react-native", "expo", "api"],
    image: "./assets/live_score.png",
    link: "https://github.com/ChrisMungiria/live_score",
  },
  {
    category: "React Native",
    name: "Recipe App",
    tags: ["react-native", "expo", "api", "youtube iframe"],
    image: "./assets/recipe_app.png",
  },
];

export const categoryMenuItems = [
  {
    value: "Linux",
    label: "Linux",
  },
  {
    value: "Bash",
    label: "Bash",
  },
  {
    value: "Docker",
    label: "Docker",
  },
  {
    value: "SQL",
    label: "SQL",
  },
  {
    value: "CMS",
    label: "CMS",
  },
  {
    value: "Code",
    label: "Code",
  },
  {
    value: "DevOps",
    label: "DevOps",
  },
];

export const difficultyMenuItems = [
  {
    value: "easy",
    label: "Easy",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "hard",
    label: "Hard",
  },
];

export const limitMenuItems = [
  ...Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  })),
];

export const tagsMenuItems = [
  {
    value: "BASH",
    label: "BASH",
  },
  {
    value: "DevOps",
    label: "DevOps",
  },
  {
    value: "Docker",
    label: "Docker",
  },
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "JavaScript",
    label: "JavaScript",
  },
  {
    value: "Kubernetes",
    label: "Kubernetes",
  },
  {
    value: "Laravel",
    label: "Laravel",
  },
  {
    value: "Linux",
    label: "Linux",
  },
  {
    value: "MySQL",
    label: "MySQL",
  },
  {
    value: "PHP",
    label: "PHP",
  },
  {
    value: "Python",
    label: "Python",
  },
  {
    value: "WordPress",
    label: "WordPress",
  },
];
