import type React from 'react';
import { useState } from 'react';
import { AsteriskIcon, SearchIcon } from '@/components/icons/CoreIcons';

// FIX: Extracted props to a dedicated interface to resolve potential type inference issues with inline types.
interface NavLinkProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

const NavLink = ({ children, active = false, onClick }: NavLinkProps) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
        }`}
    >
        {children}
    </button>
);

function Header() {
    const [activeTab, setActiveTab] = useState<'Discover' | 'Browse' | 'Blog' | 'Info'>('Discover');

    return (
        <header className="py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-start">
                        <AsteriskIcon className="size-6 text-zinc-900" />
                    </div>

                    <div className="shrink-0">
                        <div className="flex items-center bg-white border border-zinc-200/80 rounded-full shadow-sm p-1">
                            <NavLink active={activeTab === 'Discover'} onClick={() => setActiveTab('Discover')}>
                                Discover
                            </NavLink>
                            <NavLink active={activeTab === 'Browse'} onClick={() => setActiveTab('Browse')}>
                                Browse
                            </NavLink>
                            <NavLink active={activeTab === 'Blog'} onClick={() => setActiveTab('Blog')}>
                                Blog
                            </NavLink>
                            <NavLink active={activeTab === 'Info'} onClick={() => setActiveTab('Info')}>
                                Info
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-end">
                        <button
                            type="button"
                            className="p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                            aria-label="Search"
                        >
                            <SearchIcon className="size-5 text-zinc-500" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
