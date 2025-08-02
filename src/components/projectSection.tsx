export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="text-gray-600 mb-10">
          Here are a few things I've built recently:
        </p>
        {/* Replace this with your project cards or list */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border rounded shadow">Project 1</div>
          <div className="p-4 border rounded shadow">Project 2</div>
        </div>
      </div>
    </section>
  );
}
