import freddyPhoto from "../assets/HXH_IMG.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={freddyPhoto}
          alt="Freddy Rios"
          className="rounded-lg shadow-md w-full max-w-sm"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate software developer with a love for building clean,
            scalable, and impactful software. I enjoy solving problems and
            learning new technologies to improve the way we interact with the
            world.
          </p>
        </div>
      </div>
    </section>
  );
}
