import type React from 'react';
import { useState } from 'react';
import Drawer from '@/components/Drawer';
import { AsteriskIcon, BagIcon, SearchIcon } from '@/components/icons/CoreIcons';

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <header className="py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between">
                        <div className="flex-1 flex items-center justify-start">
                            <AsteriskIcon className="size-6 text-zinc-900" />
                        </div>

                        <div className="shrink-0">
                            <div className="flex items-center bg-white border border-zinc-200/80 rounded-full shadow-sm p-1">
                                <NavLink
                                    active={activeTab === 'Discover'}
                                    onClick={() => setActiveTab('Discover')}
                                >
                                    Discover
                                </NavLink>
                                <NavLink
                                    active={activeTab === 'Browse'}
                                    onClick={() => setActiveTab('Browse')}
                                >
                                    Browse
                                </NavLink>
                                <NavLink
                                    active={activeTab === 'Blog'}
                                    onClick={() => setActiveTab('Blog')}
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    active={activeTab === 'Info'}
                                    onClick={() => setActiveTab('Info')}
                                >
                                    Info
                                </NavLink>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => {
                                    // Dispatch custom event to focus search input in Hero
                                    window.dispatchEvent(new CustomEvent('focussearch'));
                                }}
                                className="p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                                aria-label="Search"
                            >
                                <SearchIcon className="size-5 text-zinc-500" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsDrawerOpen(true)}
                                className="p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                                aria-label="Open bag"
                            >
                                <BagIcon className="size-5 text-zinc-500" />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Bag"
                ariaLabel="Bag drawer"
            >
                <div className="flex flex-col items-center justify-center h-full text-zinc-500">
                    <BagIcon className="size-16 mb-4 text-zinc-300" />
                    <p className="text-base font-medium text-center mb-2">Your bag is empty.</p>
                    <p className="text-sm text-center">Start browsing our collection to add items to your cart.</p>
                    <button onClick={() => setIsDrawerOpen(false)} type="button" className="mt-4 px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg">Browse Collection</button>
                </div>
            </Drawer>
        </>
    );
}

export default Header;
