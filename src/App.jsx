import "./App.css";
import Navbar from "./components/NavBar";
import CourseCard from "./components/course/CourseCard";

const dummyCourses = [
  {
    id: 1,
    title: "The Complete 2025 Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviewCount: 285492,
    price: 12.99,
    originalPrice: 129.99,
    hours: 64.5,
    lectures: 495,
    level: "All Levels",
    bestseller: true,
    image: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_16.jpg",
  },
  {
    id: 2,
    title: "React - The Complete Guide 2025 (incl Hooks, Router, Redux)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    reviewCount: 192341,
    price: 11.99,
    originalPrice: 119.99,
    hours: 48,
    lectures: 420,
    level: "All Levels",
    bestseller: true,
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviewCount: 168923,
    price: 13.99,
    originalPrice: 149.99,
    hours: 25,
    lectures: 312,
    level: "Beginner",
    bestseller: true,
  },
  {
    id: 4,
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    instructor: "Rob Percival, Daragh Walsh",
    rating: 4.5,
    reviewCount: 145672,
    price: 10.99,
    originalPrice: 199.99,
    hours: 38,
    lectures: 450,
    level: "All Levels",
  },
  {
    id: 5,
    title: "iOS & Swift - The Complete iOS App Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviewCount: 98234,
    price: 14.99,
    originalPrice: 149.99,
    hours: 59,
    lectures: 510,
    level: "All Levels",
    bestseller: true,
  },
  {
    id: 6,
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",
    instructor: "Jonas Schmedtmann",
    rating: 4.9,
    reviewCount: 67892,
    price: 15.99,
    originalPrice: 169.99,
    hours: 42,
    lectures: 380,
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Ultimate AWS Certified Solutions Architect Associate 2025",
    instructor: "Stephane Maarek",
    rating: 4.7,
    reviewCount: 212345,
    price: 16.99,
    originalPrice: 199.99,
    hours: 28,
    lectures: 290,
    level: "All Levels",
  },
  {
    id: 8,
    title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
    instructor: "GameDev.tv Team",
    rating: 4.7,
    reviewCount: 112456,
    price: 11.99,
    originalPrice: 129.99,
    hours: 35,
    lectures: 380,
    level: "Beginner",
  },
  {
    id: 9,
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.8,
    reviewCount: 298123,
    price: 13.99,
    originalPrice: 149.99,
    hours: 69,
    lectures: 620,
    level: "All Levels",
    bestseller: true,
  },
  {
    id: 10,
    title: "Flutter & Dart - The Complete Guide [2025 Edition]",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.7,
    reviewCount: 87654,
    price: 12.99,
    originalPrice: 139.99,
    hours: 44,
    lectures: 400,
    level: "Beginner",
  },
];
function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold mb-8">Top courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {dummyCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
