import type React from 'react';
import { useState } from 'react';
import { AsteriskIcon } from '@/components/icons/CoreIcons';

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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col">
                        {/* Asterisk Icon */}
                        <AsteriskIcon className="size-6 text-zinc-900 mb-6" />

                        {/* Subscription Section */}
                        <div className="mb-6 w-full max-w-md">
                            <form
                                onSubmit={handleSubscribe}
                                className="flex gap-0 rounded-full border border-zinc-200 bg-white p-1"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@email.com"
                                    className="flex-1 px-4 py-2 rounded-full text-zinc-900 placeholder-zinc-500 focus:outline-none text-sm bg-transparent"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xs text-zinc-500 mt-1 text-center">
                                Subscribe to get notified about new products and discounts.
                            </p>
                        </div>

                        {/* About This Project */}
                        <p className="text-sm text-zinc-600 mb-auto">
                            I built this because I was inspired by UI designs I've seen on the
                            internet, with some of my own tweaks and creativity. This page currently
                            serves no purpose other than an experiment.
                        </p>

                        {/* Copyright */}
                        <p className="text-sm text-zinc-500 mt-auto pt-8">
                            © 2025 Curated Supply. All rights reserved.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col">
                        {/* Main Navigation Links */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <h3 className="font-medium text-zinc-600 mb-4 tracking-tight">
                                    Navigation
                                </h3>
                                <ul className="space-y-1">
                                    {['Discover', 'Lists', 'Brands', 'Categories', 'Index'].map(
                                        (link) => (
                                            <li key={link}>
                                                <a
                                                    href={`/${link.toLowerCase()}`}
                                                    className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-600 mb-4 tracking-tight">
                                    About
                                </h3>
                                <ul className="space-y-1">
                                    {['Info', 'Blog', 'Legal'].map((link) => (
                                        <li key={link}>
                                            <a
                                                href={`/${link.toLowerCase()}`}
                                                className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-600 mb-4 tracking-tight">
                                    Contact
                                </h3>
                                <ul className="space-y-1">
                                    {['Twitter', 'Email'].map((link) => (
                                        <li key={link}>
                                            <a
                                                href={
                                                    link === 'Twitter'
                                                        ? 'https://twitter.com/mantha_dev'
                                                        : 'mailto:'
                                                }
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-auto">
                            <div>
                                <h3 className="font-medium text-zinc-600 mb-4 tracking-tight">
                                    Categories
                                </h3>
                                <ul className="space-y-1">
                                    {[
                                        'Tech',
                                        'Home',
                                        'Workspace',
                                        'Carry',
                                        'Lifestyle',
                                        'Personal',
                                        'Books',
                                        'Travel',
                                    ].map((link) => (
                                        <li key={link}>
                                            <a
                                                href={`/categories/${link.toLowerCase()}`}
                                                className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-600 mb-4 tracking-tight">
                                    Brands
                                </h3>
                                <ul className="space-y-1">
                                    {[
                                        'Apple',
                                        'Nomad',
                                        'Grovemade',
                                        'Dyson',
                                        'Herman Miller',
                                        'Ferrari',
                                        'Omega',
                                        'Rolex',
                                    ].map((link) => (
                                        <li key={link}>
                                            <a
                                                href={`/brands/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-600 mb-4 tracking-tight">
                                    Lists
                                </h3>
                                <ul className="space-y-1">
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
                                                href={`/lists/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 text-sm"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Attribution */}
                        <div className="flex items-center gap-1.5 text-sm text-zinc-500 mt-auto pt-8 justify-center md:justify-end">
                            <span>Made by</span>
                            <a
                                href="https://mantha.vercel.app/"
                                className="hover:text-zinc-900 transition-colors duration-200 font-medium tracking-tight"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @mantha_dev
                            </a>
                            <img
                                src="/mantha-profile-pic-sm.png"
                                alt="Mantha profile"
                                className="size-6 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
