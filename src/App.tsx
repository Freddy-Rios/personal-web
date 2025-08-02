import WelcomeSection from "./components/welcomeSection";
import ProjectSection from "./components/projectSection";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";

function App() {
  return (
    <>
      {/* Main content wrapper with top padding for fixed navbar */}
      <main className="pt-24 scroll-smooth">
        <section
          id="welcome"
          className="min-h-screen flex items-center justify-center"
        >
          <WelcomeSection />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <AboutSection />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <ProjectSection />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <ContactSection />
        </section>
      </main>
    </>
  );
}

export default App;
