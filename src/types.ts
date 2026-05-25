type ProjectMedia =
  | {
      type: "video";
      src: string;
      poster?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

type Project = {
  title: string;
  description: string;
  media: ProjectMedia;
};