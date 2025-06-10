import imageURL from "./assets/image.jpg";

export const portfolioData = {
  profile: {
    name: "ASHWIN MV",
    title: "Frond End Developer",
    image: imageURL,
    email: "ashwinmarangad@gmail.com",
    phone: "+91 9446392808",
    location: "india, kerala",
    github: "https://github.com/ashwin2-mv",
    linkedin: "https://www.linkedin.com/in/ashwin-marangad-3b71b2359/",
  },
  qualifications: [
    "Bachelor of Computer Application",
    "AWS Certified Cloud Computing",
  ],
  about:
    "I am a passionate frond end developer with 2 years of experience building scalable web applications. I love solving complex problems and creating intuitive user experiences. My expertise spans across modern JavaScript frameworks, cloud technologies, and agile development practices.",
  skills: [
    {
      category: "Frontend",
      items: ["React", "html", "javaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express"],
    },
    {
      category: "Database",
      items: ["my SQL", "MongoDB", "Firebase"],
    },
    {
      category: "Tools",
      items: ["Git", "Webpack", "VS Code", "Figma"],
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend, featuring payment integration and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates using WebSockets and modern UI design.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/taskapp",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with data visualization, geolocation support, and progressive web app features.",
      technologies: ["React", "Chart.js", "PWA", "Weather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/weather",
    },
  ],
};
