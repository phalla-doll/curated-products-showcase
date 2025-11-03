import { useState } from "react";

function Hero() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <section className="text-center py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 max-w-3xl mx-auto">
                    Discover well-designed, carefully curated products
                </h1>
                <p className="mt-3 max-w-xl mx-auto text-base text-zinc-500">
                    Subscribe for weekly emails featuring timeless, design-led products across home,
                    work, and life.
                </p>
                <form className="mt-8 max-w-md mx-auto flex items-center bg-white border border-zinc-200/80 rounded-full shadow-sm pr-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="grow bg-transparent px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                            searchValue
                                ? "bg-zinc-900 text-white hover:bg-zinc-800"
                                : "text-zinc-900 bg-zinc-100 hover:bg-zinc-200"
                        }`}
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Hero;
