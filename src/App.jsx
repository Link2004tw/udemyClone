import "./App.css";
import CourseGrid from "./components/course/CourseGrid";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main>
        <HeroSection />

        <CourseGrid />
        <section className="bg-purple-700 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold">74M+</div>
              <div className="text-purple-200">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold">830K+</div>
              <div className="text-purple-200">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold">180+</div>
              <div className="text-purple-200">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold">70+</div>
              <div className="text-purple-200">Languages</div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
              Learn without limits
            </h2>
            <p className="text-xl lg:text-2xl text-purple-100 mb-10">
              Start, switch, or advance your career with more than 830,000
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-white btn-lg text-purple-700 font-bold hover:bg-gray-100">
                Start Learning for Free
              </button>
              <button className="btn btn-outline btn-white btn-lg font-bold hover:bg-white hover:text-purple-700">
                Udemy Business
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
