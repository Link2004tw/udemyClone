// components/CourseGrid.tsx
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "The Complete 2025 Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviewCount: 185492,
    price: 12.99,
    originalPrice: 119.99,
    bestseller: true,
    hours: 64.5,
    lectures: 495,
    level: "All Levels",
    image: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_16.jpg",
  },
  {
    title: "React - The Complete Guide 2025 (incl Hooks, Router, Redux)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    reviewCount: 210392,
    price: 11.99,
    originalPrice: 99.99,
    bestseller: true,
    hours: 48.5,
    lectures: 612,
    level: "All Levels",
    image: "https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg",
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviewCount: 128392,
    price: 13.99,
    originalPrice: 149.99,
    bestseller: false,
    hours: 25,
    lectures: 145,
    level: "Beginner",
    image: "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
  },
  {
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    instructor: "Colt Steele",
    rating: 4.7,
    reviewCount: 98432,
    price: 10.99,
    originalPrice: 89.99,
    bestseller: true,
    hours: 22,
    lectures: 205,
    level: "All Levels",
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",
    instructor: "Jonas Schmedtmann",
    rating: 4.9,
    reviewCount: 156789,
    price: 14.99,
    originalPrice: 129.99,
    bestseller: true,
    hours: 41,
    lectures: 380,
    level: "Intermediate",
    image: "https://img-c.udemycdn.com/course/750x422/1672410_9ff1_5.jpg",
  },
  {
    title: "Figma UI Design: From Zero to Hero in 2025",
    instructor: "Daniel Walter Scott",
    rating: 4.8,
    reviewCount: 67321,
    price: 11.99,
    originalPrice: 99.99,
    bestseller: false,
    hours: 18,
    lectures: 120,
    level: "Beginner",
    image: "https://img-c.udemycdn.com/course/750x422/2935088_53b6_2.jpg",
  },
];
export default function CourseGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Top courses in <span className="text-[#a435f0]">Development</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Learn from industry experts and boost your career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn btn-outline btn-primary btn-lg border-2 hover:bg-[#a435f0] hover:text-white font-bold px-12">
            Explore More Courses
          </button>
        </div>
      </div>
    </section>
  );
}
