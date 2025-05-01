// components/Footer.tsx
import { Facebook, Instagram, aedin, Github } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ZukaDev</h2>
          <p className="text-sm text-gray-400">
            Building powerful web solutions with passion, style and performance in mind.
          </p>
        </div>

        {/* as */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="/docs" className="hover:text-blue-400">Docs</a></li>
            <li><a href="https://tailwindcss.com" target="_blank" className="hover:text-blue-400">TailwindCSS</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com" target="_blank" className="hover:text-white">
              <Github />
            </a>
            <a href="https://aedin.com" target="_blank" className="hover:text-white">
              <aedin />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-600">
        © {new Date().getFullYear()} ZukaDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
