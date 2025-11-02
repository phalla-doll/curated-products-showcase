import React, { useState } from 'react';
import { AsteriskIcon } from './icons/CoreIcons';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/80 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subscription Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <AsteriskIcon className="w-6 h-6 text-zinc-900 shrink-0" />
            <div className="flex-1 flex flex-col sm:flex-row gap-3">
              <form onSubmit={handleSubscribe} className="flex gap-3 flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="flex-1 px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500 max-w-2xl">
            Select links may be affiliate based. I back what I share, and only recommend products I use, trust or see real value in.
          </p>
        </div>

        {/* Main Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Discover', 'Lists', 'Brands', 'Categories', 'Index'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">About</h3>
            <ul className="space-y-2">
              {['Info', 'Blog', 'Legal'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              {['Twitter', 'Email'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Footer Lists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Tech', 'Home', 'Workspace', 'Carry', 'Lifestyle', 'Personal', 'Books', 'Travel'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Brands</h3>
            <ul className="space-y-2">
              {['Apple', 'Nomad', 'Grovemade', 'Dyson', 'Herman Miller', 'Ferrari', 'Omega', 'Rolex'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Lists</h3>
            <ul className="space-y-2">
              {[
                'Brutalist Picks',
                'Cult of Coffee',
                'For Your Coffee Table',
                'Minimalist Objects',
                'Audiophile Core',
                'Home Office Goals',
                'Black Only',
                'Deskworthy',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-200/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © 2025 Curated Supply. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>Made by</span>
            <a
              href="#"
              className="hover:text-zinc-900 transition-colors duration-200 font-medium"
            >
              @justinmfarrugia
            </a>
            <div className="w-6 h-6 rounded-full bg-zinc-300"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

