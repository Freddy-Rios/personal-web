export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Interested in working together? Drop me a message!
        </p>
        {/* Replace with actual form or email link */}
        <a
          href="mailto:youremail@example.com"
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
