export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <p className="text-gray-600 mb-10">
          Check out my latest articles on web development and design.
        </p>
        {/* Replace with actual blog posts or links */}
        <a
          href="/blog"
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Read More
        </a>
      </div>
    </section>
  );
}
