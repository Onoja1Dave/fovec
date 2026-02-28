import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center space-x-2 text-white font-serif font-bold text-2xl mb-6 hover:text-gray-300 transition-colors cursor-pointer">
              <span>FOVEC</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Facilitating Global Education, Mobility, and Institutional
              Partnerships. We turn your global aspirations into reality.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/share/1CAvdvGjJw/?mibextid=wwXIfr", name: "Facebook" },
                { Icon: Twitter, link: "https://x.com/fovecglob?s=21", name: "Twitter" },
                { Icon: Instagram, link: "https://www.instagram.com/fovecglobal?igsh=dTc5N2ZyMWg5Mm5k&utm_source=qr", name: "Instagram" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/fovec-global-3753623b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios", name: "LinkedIn" },
              ].map(({ Icon, link, name }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-accent hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal section temporarily omitted */}

          {/* Newsetter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-xs text-gray-500 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required
                className="bg-gray-800 border-none text-white text-sm rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-accent outline-none"
              />
              <button type="submit" className="bg-accent text-white px-4 py-2 rounded-r-md hover:bg-lime-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} FOVEC Global Limited. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center hover:text-white"
          >
            Back to Top <ArrowUp size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
