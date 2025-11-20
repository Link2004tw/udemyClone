export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden pt-24 lg:pt-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#a855f7_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#3b82f6_0%,_transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            New Year, New Skills
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-gray-200">
            Build in-demand tech skills with courses starting at just $9.99.
            Limited time offer — don’t miss out!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <div className="bg-white text-gray-900 rounded-lg p-6 shadow-2xl max-w-md">
              <h3 className="text-2xl font-bold mb-2">
                Get personalized recommendations
              </h3>
              <p className="text-gray-600 mb-4">
                Answer a few questions for course suggestions tailored just for
                you.
              </p>
              <button className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition">
                Get started
              </button>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-8 shadow-2xl flex-1">
              <h3 className="text-3xl font-bold mb-3">Sale ends soon!</h3>
              <div className="text-5xl font-extrabold mb-2">Up to 90% off</div>
              <div className="text-lg opacity-90">
                Courses from $9.99 until Jan 31
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-30 translate-x-32 translate-y-32" />
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-30 -translate-x-40" />
    </div>
  );
}
