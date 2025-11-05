import type React from 'react';
import { ClockIcon } from '@/components/icons/CoreIcons';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    imageUrl?: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Art of Minimalism: Curating Your Workspace',
        excerpt:
            'Discover how thoughtful design choices can transform your workspace into a haven of productivity and creativity. We explore the principles of minimalism and how they apply to modern work environments.',
        author: 'Sarah Chen',
        date: 'March 15, 2024',
        readTime: '5 min read',
        category: 'Workspace',
    },
    {
        id: 2,
        title: 'Why We Love Dieter Rams: Less but Better',
        excerpt:
            'A deep dive into the legendary designer\'s philosophy that continues to influence modern product design. Explore how "less but better" has shaped the products we use every day.',
        author: 'Michael Park',
        date: 'March 10, 2024',
        readTime: '7 min read',
        category: 'Design',
    },
    {
        id: 3,
        title: 'Building the Perfect Tech Setup in 2024',
        excerpt:
            'From monitors to keyboards, we break down the essentials for creating a professional tech setup that balances form and function. Learn what matters most when choosing your tools.',
        author: 'Emma Rodriguez',
        date: 'March 5, 2024',
        readTime: '6 min read',
        category: 'Tech',
    },
    {
        id: 4,
        title: 'The Psychology of Product Design',
        excerpt:
            'Understanding how great design influences our emotions and behavior. We examine the subtle ways well-designed products enhance our daily lives beyond their primary function.',
        author: 'David Kim',
        date: 'February 28, 2024',
        readTime: '8 min read',
        category: 'Design',
    },
    {
        id: 5,
        title: 'Sustainable Design: Products Built to Last',
        excerpt:
            'In an era of disposable consumerism, we celebrate products designed with longevity in mind. Discover brands that prioritize durability and timeless design over trends.',
        author: 'Lisa Anderson',
        date: 'February 22, 2024',
        readTime: '6 min read',
        category: 'Lifestyle',
    },
    {
        id: 6,
        title: 'Home Office Essentials: What Really Matters',
        excerpt:
            "After years of remote work, we've learned what truly makes a difference in home office productivity. From ergonomics to aesthetics, here's what to prioritize.",
        author: 'James Wilson',
        date: 'February 15, 2024',
        readTime: '5 min read',
        category: 'Workspace',
    },
];

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="group cursor-pointer focus-visible:outline-none">
            <div className="bg-white rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                        <span className="text-4xl font-bold text-zinc-400">{post.title[0]}</span>
                    </div>
                )}
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <ClockIcon className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors duration-200">
                        {post.title}
                    </h2>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
                                <span className="text-xs font-medium text-zinc-700">
                                    {post.author[0]}
                                </span>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-zinc-900">{post.author}</p>
                                <p className="text-xs text-zinc-500">{post.date}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="text-xs font-medium text-zinc-700 hover:text-zinc-900 transition-colors duration-200"
                            aria-label={`Read more about ${post.title}`}
                        >
                            Read →
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

function Blog() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">Blog</h1>
                <p className="text-zinc-600">
                    Insights, stories, and inspiration from the world of design
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
