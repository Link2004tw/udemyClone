export default function CourseCard({
  title = "The Complete 2025 Web Development Bootcamp",
  instructor = "Dr. Angela Yu",
  rating = 4.7,
  reviewCount = 185492,
  price = 12.99,
  originalPrice = 119.99,
  bestseller = true,
  hours = 64.5,
  lectures = 495,
  level = "All Levels",
  image = "https://img-c.udemycdn.com/course/750x422/1565838_e54e_16.jpg",
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="card bg-base-100 shadow hover:shadow-xl transition-all duration-300 cursor-pointer group w-full max-w-sm">
      {/* Course Thumbnail */}
      <figure className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {bestseller && (
          <div className="absolute top-3 left-3 bg-secondary text-secondary-content text-xs font-bold px-3 py-1 rounded">
            Bestseller
          </div>
        )}
      </figure>

      <div className="card-body p-5 gap-2">
        {/* Course Title */}
        <h3 className="card-title text-base font-bold line-clamp-2 group-hover:text-[#a435f0] transition-colors">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-base-content/70">{instructor}</p>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-amber-600">{rating}</span>

          <div className="flex items-center">
            {/* Full Stars */}
            {[...Array(fullStars)].map((_, i) => (
              <span key={i} className="text-amber-500 text-sm">
                ★
              </span>
            ))}
            {/* Half Star */}
            {hasHalfStar && <span className="text-amber-500 text-sm">½</span>}
            {/* Empty Stars */}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
              <span key={i + fullStars + 1} className="text-gray-300 text-sm">
                ★
              </span>
            ))}
          </div>

          <span className="text-xs text-base-content/70">
            ({reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Duration + Lectures + Level */}
        <div className="text-xs text-base-content/60 space-y-1">
          <span>{hours} total hours</span>
          <span className="mx-2">•</span>
          <span>{lectures} lectures</span>
          <span className="mx-2">•</span>
          <span>{level}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-bold">${price}</span>
          {originalPrice > price && (
            <span className="text-sm line-through text-base-content/60">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="card-actions opacity-0 group-hover:opacity-100 transition-opacity mt-3">
          <button className="btn btn-primary btn-sm w-full">Add to cart</button>
          <button className="btn btn-ghost btn-sm w-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
