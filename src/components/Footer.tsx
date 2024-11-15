import React from 'react';
import { Link } from 'react-router-dom';
import { Sofa, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Sofa className="h-8 w-8 text-primary-300" />
              <span className="text-xl font-bold">InteriorCraft</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Creating beautiful spaces that inspire and delight since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary-300 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail size={16} />
                <span>hello@interiorcraft.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <MapPin size={16} />
                <span>123 Design Street, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram' },
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-gray-600 hover:text-primary-300 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} InteriorCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;