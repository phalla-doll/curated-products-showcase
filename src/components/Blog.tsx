import type React from 'react';
import type { BlogPost } from '@/components/BlogDetail';
import { blogPosts } from '@/components/BlogDetail';
import { ClockIcon } from '@/components/icons/CoreIcons';

interface BlogCardProps {
    post: BlogPost;
    onPostClick: (postId: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onPostClick }) => {
    const handleClick = () => {
        onPostClick(post.id);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <article className="group cursor-pointer focus-visible:outline-none h-full flex flex-col">
            <button
                type="button"
                className="w-full h-full text-left focus-visible:outline-none"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                aria-label={`Read ${post.title}`}
            >
                <div className="bg-white rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    {post.imageUrl ? (
                        <div className="aspect-video bg-zinc-100 overflow-hidden">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ) : (
                        <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                            <span className="text-4xl font-bold text-zinc-400">
                                {post.title[0]}
                            </span>
                        </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                                <ClockIcon className="w-3.5 h-3.5" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors duration-200 line-clamp-2 min-h-[3.5rem]">
                            {post.title}
                        </h2>
                        <p className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
                                    <span className="text-xs font-medium text-zinc-700">
                                        {post.author[0]}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-zinc-900">
                                        {post.author}
                                    </p>
                                    <p className="text-xs text-zinc-500">{post.date}</p>
                                </div>
                            </div>
                            <span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors duration-200">
                                Read →
                            </span>
                        </div>
                    </div>
                </div>
            </button>
        </article>
    );
};

interface BlogProps {
    onPostClick: (postId: number) => void;
}

function Blog({ onPostClick }: BlogProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">Blog</h1>
                <p className="text-zinc-600">
                    Insights, stories, and inspiration from the world of design
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] items-stretch">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} onPostClick={onPostClick} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
