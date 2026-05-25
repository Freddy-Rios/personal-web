import { Project } from "@/components/projects";

export const projects: Project[] = [
  {
    title: "Galaga Rip",
    description:
      "A roguelike game built in MonoGame with enemies, combat, and roundbased gameplay.",
    media: {
      type: "video",
      src: "/videos/dungeon-slime.mp4",
      poster: "/images/dungeon-slime-poster.jpg",
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