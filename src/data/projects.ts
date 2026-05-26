import { Project } from "@/components/projects";

export const projects: Project[] = [
  {
    title: "New Galaga",
    description:
      "A fast-paced, arcade-style shooter built from scratch during a solo 48-hour challenge. Developed entirely without AI assistance to test core software design, this project focuses on clean game-loop architecture, real-time input handling, and rapid prototyping using the MonoGame framework.",
    media: {
      type: "video",
      src: "/videos/Galaga.mov",
      poster: "",
    },
  },

  {
    title: "Pitchwise",
    description:
      "A startup idea sharing platform built with React and Tailwind CSS.",
    media: {
      type: "image",
      src: "/images/pitchwise.png",
      alt: "Pitchwise homepage",
    },
  },

  {
    title: "Robot Project",
    description:
      "A robotics project involving sensors and hardware integration.",
    media: {
      type: "image",
      src: "/images/robot.png",
      alt: "Robot project",
    },
  },
];