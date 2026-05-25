// import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Project } from "./projects";

// type ProjectCarouselProps = {
//   projects: Project[];
// };

// export default function ProjectCarousel({
//   projects,
// }: ProjectCarouselProps) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//   });

//   const scrollPrev = () => {
//     emblaApi?.scrollPrev();
//   };

//   const scrollNext = () => {
//     emblaApi?.scrollNext();
//   };

//   return (
//     <div className="relative max-w-5xl mx-auto">
//       {/* Left Arrow */}
//       <button
//         onClick={scrollPrev}
//         className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md p-3 hover:bg-gray-100 transition"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>

//       {/* Carousel */}
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] px-4"
//             >
//               <ProjectSlide project={project} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={scrollNext}
//         className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md p-3 hover:bg-gray-100 transition"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>
//     </div>
//   );
// }

// type ProjectSlideProps = {
//   project: Project;
// };

// function ProjectSlide({ project }: ProjectSlideProps) {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="rounded-xl overflow-hidden shadow-lg mb-6 border">
//         {project.media.type === "video" ? (
//           <video
//             controls
//             muted
//             preload="metadata"
//             poster={project.media.poster}
//             className="w-full"
//           >
//             <source
//               src={project.media.src}
//               type="video/mp4"
//             />
//           </video>
//         ) : (
//           <img
//             src={project.media.src}
//             alt={project.media.alt}
//             className="w-full object-cover"
//           />
//         )}
//       </div>

//       <h3 className="text-2xl font-bold">
//         {project.title}
//       </h3>

//       <p className="text-muted-foreground mt-2">
//         {project.description}
//       </p>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "./projects";

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({
  projects,
}: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  useEffect(() => {
    if (!emblaApi) return;

    const pauseAllVideos = () => {
      const videos =
        carouselRef.current?.querySelectorAll("video");

      videos?.forEach((video) => {
        video.pause();
      });
    };

    emblaApi.on("select", pauseAllVideos);

    return () => {
      emblaApi.off("select", pauseAllVideos);
    };
  }, [emblaApi]);

  return (
    <div
      ref={carouselRef}
      className="relative max-w-5xl mx-auto"
    >
      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md p-3 hover:bg-gray-100 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] px-4"
            >
              <ProjectSlide project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md p-3 hover:bg-gray-100 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

type ProjectSlideProps = {
  project: Project;
};

function ProjectSlide({
  project,
}: ProjectSlideProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-xl overflow-hidden shadow-lg mb-6 border">
        {project.media.type === "video" ? (
          <video
            controls
            muted
            preload="metadata"
            poster={project.media.poster}
            className="w-full"
          >
            <source
              src={project.media.src}
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src={project.media.src}
            alt={project.media.alt}
            className="w-full object-cover"
          />
        )}
      </div>

      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="text-muted-foreground mt-2">
        {project.description}
      </p>
    </div>
  );
}