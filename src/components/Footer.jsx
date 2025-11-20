import { Globe } from "lucide-react";

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div>
          <h4 className="text-white font-bold mb-4">Udemy Business</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Teach on Udemy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Get the app
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Careers</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help and Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Investors
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Terms</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookie settings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-2">
          <button className="btn btn-outline btn-white hover:bg-white hover:text-gray-900">
            <Globe className="w-5 h-5 mr-2" />
            English
          </button>
        </div>
      </div>
      <div className="mt-12 text-center text-sm border-t border-gray-800 pt-8">
        <p>© 2025 LearnHub, Inc. (Your Udemy Clone)</p>
      </div>
    </footer>
  );
}
