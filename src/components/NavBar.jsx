import { useState } from "react";
import { Search, Menu, Globe } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="px-4 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            <a
              href="/"
              className="text-3xl font-bold text-purple-600 hover:text-purple-700 transition"
            >
              Udemy
            </a>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a
                href="#"
                className="text-black hover:text-purple-600 transition"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-black hover:text-purple-600 transition"
              >
                Udemy Business
              </a>
              <a
                href="#"
                className="text-black hover:text-purple-600 transition"
              >
                Teach on Udemy
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-3 w-96">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-gray-900 placeholder-gray-500 w-full"
              />
            </div>

            <button className="hidden lg:block p-3 hover:bg-gray-100 rounded-lg transition">
              <Globe className="w-5 h-5 text-black" />
            </button>

            <button className="hidden text-primary  lg:block px-6 py-3 border border-primary hover:bg-gray-100 font-medium transition rounded">
              Log in
            </button>

            <div className="hidden lg:block">
              <PrimaryButton>Sign up</PrimaryButton>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-4">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="p-6 space-y-4">
              <a
                href="#"
                className="block font-semibold text-black text-lg hover:text-purple-600"
              >
                Categories
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600">
                Udemy
              </a>
              <a href="#" className="block text-gray-700 hover:text-purple-600">
                Teach on Udemy
              </a>
              <div className="pt-4 space-y-3">
                <button className="w-full px-6 py-3 border border-gray-900 hover:bg-gray-100 font-medium rounded">
                  Log in
                </button>
                <PrimaryButton className="w-full">Sign up</PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
