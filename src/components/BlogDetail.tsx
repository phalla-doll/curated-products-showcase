import { ArrowLeft01Icon, Clock01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { BlogCard } from '@/components/Blog';

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
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
        content: `In today's fast-paced world, our workspace has become more than just a place to work—it's a reflection of our values, creativity, and approach to productivity. The art of minimalism offers a powerful framework for creating spaces that inspire rather than distract.

## The Philosophy of Less

Minimalism isn't about deprivation or empty spaces. Instead, it's about intentionality—choosing each item based on its purpose and beauty. When applied to workspace design, this philosophy transforms chaotic desks into sanctuaries of focused work.

The core principle is simple: everything in your space should serve a purpose. Whether it's a monitor stand that elevates your screen to eye level or a keyboard that brings joy to typing, each piece should enhance your daily experience.

## Curating Your Essentials

Start by assessing what you truly need. Begin with the essentials: a quality monitor, an ergonomic chair, and a keyboard that feels right. These foundational pieces set the tone for everything else. From there, add items that spark joy or improve your workflow.

Consider the Herman Miller Aeron chair—a design icon that perfectly balances form and function. It's not just about comfort; it's about investing in pieces that last decades rather than years.

## The Power of Negative Space

One of the most overlooked aspects of workspace design is negative space. Empty surfaces aren't wasted space—they're opportunities for your mind to breathe. A cluttered desk leads to a cluttered mind, while clean surfaces invite clarity and creativity.

Think about your desk layout. Can you see your desk surface? Is there room to spread out papers when needed? These small details significantly impact your mental state and productivity.

## Quality Over Quantity

In minimalism, quality always trumps quantity. Rather than buying multiple cheap items, invest in fewer, better pieces. A single well-designed lamp like the Loft Orb can transform your entire workspace atmosphere, while a collection of mismatched accessories creates visual chaos.

This principle extends beyond furniture. One excellent mechanical keyboard outshines a drawer full of mediocre ones. A single great pen feels better than a box of disposable ones.

## Personal Touches

Minimalism doesn't mean sterile. The best workspaces include carefully chosen personal touches—a favorite plant, a meaningful photograph, or a piece of art that inspires. The key is moderation: one special item has more impact than a collection of knick-knacks.

Your workspace should feel like yours, not a generic showroom. Add personality through color, texture, or items that tell your story—just be intentional about what makes the cut.

## Maintaining Your Space

A minimalist workspace requires regular maintenance. Set aside time each week to reassess your setup. Has something stopped serving its purpose? Is there clutter creeping in? Regular curation keeps your space aligned with your goals.

Remember, minimalism is a journey, not a destination. Your perfect workspace will evolve as your needs change. Embrace the process of refinement and enjoy the clarity that comes with intentional design.`,
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
        content: `Few designers have influenced modern product design as profoundly as Dieter Rams. His tenure at Braun from 1955 to 1995 produced some of the most iconic products of the 20th century, and his "less but better" philosophy continues to guide designers today.

## The Ten Principles

Rams famously outlined ten principles of good design, each reflecting his minimalist philosophy:

1. **Good design is innovative** - It always develops in tandem with innovative technology
2. **Good design makes a product useful** - It optimizes usefulness and ignores anything that could detract from it
3. **Good design is aesthetic** - Only well-executed objects can be beautiful
4. **Good design makes a product understandable** - It clarifies the product's structure
5. **Good design is unobtrusive** - Products fulfilling a purpose are like tools
6. **Good design is honest** - It does not make a product more innovative, powerful, or valuable than it really is
7. **Good design is long-lasting** - It avoids being fashionable and therefore never appears antiquated
8. **Good design is thorough down to the last detail** - Nothing must be arbitrary or left to chance
9. **Good design is environmentally friendly** - Design makes an important contribution to the preservation of the environment
10. **Good design is as little design as possible** - Less, but better—back to purity, back to simplicity

## The Legacy in Modern Products

Rams' influence is everywhere. Look at Apple's products—their clean lines, focus on function, and elimination of unnecessary elements directly reflect Rams' principles. Jonathan Ive, Apple's former Chief Design Officer, openly acknowledged Rams' influence.

But it's not just Apple. Modern designers across industries apply Rams' principles. The Nothing Phone's transparent design reveals rather than hides. The Herman Miller Aeron chair prioritizes function and ergonomics over decoration. Even our favorite everyday objects—from coffee makers to watches—bear the marks of Rams' thinking.

## Less but Better in Practice

What does "less but better" mean in practice? It means choosing a single excellent item over many mediocre ones. It means products that do one thing exceptionally well rather than many things poorly. It means investing in quality that lasts decades, not months.

Consider the Braun calculator designs Rams created. They eliminated every unnecessary element, leaving only what was essential for function. The result? Timeless design that remains beautiful and functional decades later.

## The Challenge of Minimalism

Rams' approach isn't easy. It requires restraint, discipline, and the courage to remove elements rather than add them. Many designers struggle with this—adding features, decorations, or complexity seems safer than the bold simplicity Rams championed.

But when done right, minimalism creates products that feel inevitable—as if they couldn't be designed any other way. This sense of rightness is Rams' greatest gift to product design.

## Environmental Responsibility

Rams was ahead of his time in discussing environmental responsibility. His principle that "good design is environmentally friendly" anticipated our current focus on sustainability. Products designed to last, to be repaired, to avoid waste—these aren't new ideas. Rams was advocating for them decades ago.

Modern brands like Fairphone or Framework that prioritize repairability are following Rams' principles. They prove that good design and environmental responsibility aren't at odds—they're complementary.

## Applying Rams Today

How do we apply Rams' principles today? Start by questioning every element. Does this feature add value? Could this be simpler? Will this design still be relevant in ten years?

Looking at products like the Nothing Phone or the Framework Laptop, we see Rams' influence alive and well. Clean designs, honest materials, focus on function, and respect for the user—these principles guide the best products of our era.

Rams' legacy isn't just in the products he designed—it's in the philosophy he shared. "Less but better" isn't just a design principle; it's a way of thinking about how we consume, create, and live.`,
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
        content: `Creating the perfect tech setup in 2024 is about more than just buying the latest gadgets. It's about curating a collection of tools that work seamlessly together, enhance your productivity, and bring joy to your daily work.

## The Foundation: Monitor Choice

Your monitor is the window to your digital world. In 2024, the Apple Studio Display and Pro Display XDR represent the pinnacle of display technology—but they're not the only options. What matters most isn't the brand, but the specs that match your needs.

Resolution matters, but so does color accuracy. If you're doing design work, prioritize color gamut coverage. For coding, consider ultrawide monitors that give you more horizontal space. For general productivity, a 27-inch 4K display hits the sweet spot.

## The Input Experience

Your keyboard and mouse are your primary interfaces with your computer. They shouldn't be afterthoughts. Mechanical keyboards like the Loft Orb or Keychron models offer tactile feedback that makes typing enjoyable. The right keyboard can turn typing from a chore into a pleasure.

Consider your ergonomics. A keyboard that feels good but causes wrist strain isn't worth it. Invest in wrist rests, consider split keyboards if you type extensively, and remember that aesthetics matter—you'll be looking at these tools every day.

## The Audio Setup

Sound quality impacts your productivity more than most people realize. Whether you're on video calls, listening to music while working, or consuming content, good audio elevates the experience.

The Sony WH-1000XM5 offers industry-leading noise cancellation for focused work. The AirPods Max provides seamless integration with Apple ecosystems. For desktop listening, consider speakers that provide clear audio without taking up excessive space.

## The Power of Stands and Organization

Monitor stands, laptop stands, and desk organizers aren't just accessories—they're essential for creating a clean, organized workspace. The Studio Display's built-in stand elevates your screen to optimal height. External stands like the Grovemade options add flexibility and style.

Cable management matters. A beautiful setup is ruined by visible cables. Invest in cable trays, use zip ties or Velcro straps, and route cables behind your desk. The clean aesthetic is worth the extra effort.

## The Mobile Office

Modern work requires mobility. A laptop that balances power and portability is essential. The MacBook Pro offers incredible performance in a portable package. For Windows users, the Framework Laptop provides modularity and repairability.

Don't forget your bag. A quality backpack or briefcase protects your investment. The Hardgraft Long Haul Briefcase or Nomad Base One Max offer both style and protection.

## The Little Things

It's often the small details that transform a good setup into a great one. A quality desk mat protects your surface and adds texture. A good lamp—like the Loft Orb or IKEA Varmblixt—provides proper lighting without glare.

Plants add life to your space. A succulent or small plant brings natural elements that improve both aesthetics and air quality. Books create visual interest and provide reference material—the Phaidon design books are both beautiful and informative.

## The Evolution

Your perfect setup isn't static. It evolves as your needs change. Maybe you start with a laptop and external monitor, then add a mechanical keyboard. Perhaps you discover you need a standing desk or better lighting.

The key is starting with solid fundamentals and building thoughtfully. Don't try to build the perfect setup overnight. Let it develop organically as you discover what truly enhances your work.

## Budget Considerations

You don't need to spend thousands to create a great setup. Focus on the items you interact with most—your keyboard, mouse, and monitor. These are worth investing in. Everything else can be added gradually.

For monitors, consider Dell Ultrasharp or LG UltraFine options as alternatives to Apple displays. For keyboards, mechanical switch options exist at various price points. Build your setup over time, prioritizing quality over quantity.

## The Philosophy

Ultimately, your tech setup should reflect your work style and preferences. The perfect setup for a designer looks different from a programmer's ideal setup. A minimalist's setup differs from someone who loves tactile objects.

Start with the essentials, add thoughtfully, and remember that the best setup is one that makes you excited to work. That excitement—that joy—is what separates a good setup from a perfect one.`,
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
        content: `Great product design does more than solve problems—it shapes how we feel, think, and behave. The psychology behind design choices reveals why some products become beloved while others remain merely functional.

## Emotional Design

Donald Norman's three levels of emotional design—visceral, behavioral, and reflective—explain why we form attachments to certain products. The visceral level is immediate: how a product looks and feels. The behavioral level concerns usability and function. The reflective level involves meaning, memories, and identity.

A product like the Nothing Phone hits all three levels. Its transparent design creates immediate visual interest (visceral). Its interface and functionality are intuitive (behavioral). Its uniqueness becomes part of the user's identity (reflective).

## The Power of Tactility

Physical interaction matters more than we realize. The weight of a well-designed pen, the click of a mechanical keyboard switch, the texture of a leather briefcase—these tactile experiences create emotional connections.

Consider the difference between typing on a quality mechanical keyboard versus a cheap membrane keyboard. Both work, but one feels enjoyable while the other feels like a chore. That feeling difference impacts our relationship with work itself.

## Familiarity and Surprise

Good design balances familiarity with surprise. We need recognizable patterns to feel comfortable, but we also crave elements that delight us. The iPhone's familiar interface combined with thoughtful animations creates this balance.

Products that are too familiar feel boring. Products that are too surprising feel alienating. The sweet spot lies in familiar foundations with delightful details—like the subtle haptic feedback in modern smartphones or the satisfying click of a well-designed switch.

## The Status of Objects

Products communicate status, but not just in the traditional sense. Carrying a quality briefcase signals attention to detail. Using a mechanical keyboard suggests appreciation for craftsmanship. Owning a Leica camera communicates a particular aesthetic sensibility.

These signals aren't always about wealth—they're about values. A Framework Laptop signals repairability and environmental consciousness. A Nothing Phone signals appreciation for transparency and design. Our product choices become part of our identity.

## The Ritual of Use

Great products create rituals. The act of brewing coffee with a quality pour-over setup becomes meditative. The routine of winding a mechanical watch connects us to tradition. Even opening a laptop becomes a small ceremony when the product is thoughtfully designed.

These rituals provide structure and meaning to our days. They're moments of mindfulness in otherwise busy lives. Products that facilitate these rituals offer value beyond their primary function.

## Anticipation and Reward

The best products create anticipation. Opening a new Apple product is an experience designed to build excitement. The packaging, the reveal, the first interaction—all orchestrated to maximize positive emotion.

But anticipation isn't just about new products. We can anticipate using our favorite tools. The feeling of sitting down at a well-organized desk, sharpening a favorite pencil, or adjusting a monitor to perfect height—these small anticipations enhance our daily experience.

## The Problem of Choice

Too many choices create anxiety. Good design reduces cognitive load by making the right choice obvious. The best products have clear affordances—you know how to use them just by looking.

Apple products excel at this. You rarely need a manual to use an iPhone because the design communicates function. Good design lets products speak for themselves, reducing the mental effort required to use them.

## Memory and Association

Products become repositories of memory. A watch worn during important moments gains emotional significance. A keyboard used to write thousands of words becomes part of your creative process. A chair that supports long work sessions becomes a trusted companion.

These associations make products feel irreplaceable. We form bonds with objects that serve us well over time. This psychological bond is why quality matters—cheap products break before these associations form.

## The Future of Emotional Design

As products become more digital, maintaining emotional connections becomes challenging. Haptic feedback, thoughtful animations, and quality materials help bridge the gap between digital and physical.

The Nothing Phone's transparent design makes the digital feel physical. The AirPods Max's materials and build quality create emotional connection despite wireless technology. The best future products will maintain this balance between digital convenience and physical emotion.

## Applying Design Psychology

Understanding design psychology helps us make better choices. When selecting products, consider not just function but emotion. How does this product make you feel? Does it spark joy? Does it invite use? Does it reflect your values?

The products we choose reflect who we are and who we aspire to be. Understanding the psychology behind these choices helps us build environments—both physical and digital—that support our best selves.`,
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
        content: `In a world of planned obsolescence and disposable products, sustainable design represents a radical alternative: products built to last decades, not months. These products challenge the throwaway culture and prove that quality and longevity are worth the investment.

## The Longevity Principle

Sustainable design starts with a simple question: Can this product last a lifetime? Not everything can, but many products can. A Herman Miller Aeron chair can last decades. A mechanical keyboard can outlive multiple computers. A quality watch can become a family heirloom.

The Framework Laptop exemplifies this principle. Its modular design allows for upgrades and repairs, extending its lifespan far beyond typical laptops. Instead of replacing the entire device when components become outdated, you replace only what's necessary.

## Repairability: The New Standard

The right to repair movement has gained momentum, and for good reason. Products designed for repairability last longer, reduce waste, and save money. The Framework Laptop's modular design makes it easy to replace components. The Fairphone prioritizes repairability in smartphone design.

But repairability requires more than just physical access. It requires documentation, available parts, and a commitment from manufacturers. Products that embrace repairability aren't just sustainable—they're empowering.

## Materials Matter

Sustainable design considers materials throughout a product's lifecycle. Bamboo, recycled aluminum, and responsibly sourced leather represent better choices than virgin plastics and unsustainable materials.

The Nomad Base One Max uses recycled materials where possible. The Hardgraft briefcase uses vegetable-tanned leather chosen for durability. These material choices reflect a commitment to both quality and environmental responsibility.

## Timeless Over Trendy

Sustainable products avoid trends. A product designed to last shouldn't look dated in two years. Timeless design—like Dieter Rams' Braun products or classic watch designs—remains relevant across decades.

The Apple Studio Display avoids trend-driven elements. Its design is clean, simple, and likely to remain appealing for years. This timelessness is a form of sustainability—products that don't need replacement due to aesthetic obsolescence.

## The Cost of Quality

Sustainable products often cost more upfront. But when considered over decades, they represent better value. A $1500 Herman Miller chair amortized over 20 years costs $75 per year. A $300 office chair replaced every 3 years costs $100 per year—and offers less comfort and support.

This long-term thinking challenges our immediate-gratification culture. But it's essential for building sustainable consumption habits.

## Brands Leading the Way

Several brands exemplify sustainable design principles:

**Framework** - Modular laptops designed for repairability and upgrades
**Fairphone** - Smartphones built for longevity and easy repair
**Herman Miller** - Office furniture built to last decades
**Rimowa** - Luggage with lifetime warranties and repair services
**Rolex** - Watches that become family heirlooms

These brands prove that sustainable design isn't just possible—it's profitable when done right.

## The Circular Economy

Sustainable design supports circular economy principles. Products designed for longevity can be repaired, refurbished, and eventually recycled. This closed-loop approach reduces waste and resource consumption.

Companies like Patagonia and Apple have robust repair programs. Apple's trade-in program extends product lifecycles. Patagonia's Worn Wear program keeps products in use longer. These initiatives represent the future of sustainable consumption.

## Consumer Responsibility

Sustainable design requires consumer responsibility. We must choose products built to last, care for them properly, and resist the urge to replace functional items simply because something newer exists.

This means buying less, but buying better. It means maintaining what we own. It means valuing longevity over novelty. Our choices as consumers shape the market.

## The Challenge of Electronics

Electronics pose particular challenges for sustainability. Rapid technological advancement creates pressure for frequent upgrades. But companies like Framework prove that modularity can extend electronics lifespans.

The key is prioritizing repairability and modularity. When a laptop's RAM or storage can be upgraded, the entire device lasts longer. When a phone's battery can be easily replaced, it extends useful life.

## Building a Sustainable Setup

Creating a sustainable setup means choosing each product carefully. Start with items that will last: a quality monitor, an ergonomic chair, a mechanical keyboard. Add items slowly, prioritizing quality over quantity.

Buy used when possible. Many excellent products are available secondhand. A used Herman Miller chair offers the same quality as new at a fraction of the cost. Vintage mechanical keyboards often outperform modern alternatives.

## The Future of Sustainability

Sustainable design isn't a trend—it's a necessity. As resources become scarcer and waste becomes more problematic, products built to last become essential. Companies that prioritize longevity will thrive.

Consumers increasingly value sustainability. Younger generations especially prioritize environmental responsibility. This shift creates opportunities for brands that embrace sustainable design principles.

## Making Sustainable Choices

Sustainable design requires thinking differently about consumption. Instead of asking "What's new?" we ask "What will last?" Instead of valuing low prices, we value long-term value. Instead of following trends, we choose timelessness.

The products we choose reflect our values. Choosing sustainable products sends a message: we value quality, longevity, and environmental responsibility. These choices shape not just our workspaces, but the world we leave behind.`,
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
        content: `After years of remote work, we've learned what truly matters in a home office setup. It's not about having the most expensive equipment—it's about creating an environment that supports productivity, creativity, and well-being.

## The Ergonomic Foundation

Your chair and desk setup form the foundation of productive work. An ergonomic chair like the Herman Miller Aeron supports proper posture during long sessions. Monitor height matters—your screen should be at eye level to prevent neck strain.

Don't overlook desk height. Whether you use a standing desk or a traditional one, proper height prevents wrist and shoulder issues. An adjustable monitor stand provides flexibility to optimize your setup exactly for your body.

## The Visual Experience

Your monitor is your primary interface with digital work. Size matters, but so does quality. A 27-inch 4K display like the Apple Studio Display provides ample space and crisp clarity. For those who need more, ultrawide monitors offer expansive horizontal space.

Lighting matters too. Natural light is ideal, but consistent artificial lighting prevents eye strain. A quality desk lamp provides focused light without glare. Consider the Loft Orb or IKEA Varmblixt for both function and aesthetics.

## The Input Experience

Your keyboard and mouse are your connection to your computer. They deserve attention. A mechanical keyboard provides tactile feedback that makes typing enjoyable. The right keyboard can transform typing from a chore into a pleasure.

For mice, consider ergonomics. A vertical mouse can prevent wrist strain. For precision work, a quality trackpad or mouse with adjustable DPI makes a difference. Don't underestimate how much input quality affects your work experience.

## Cable Management

A clean workspace is a productive workspace. Cable management might seem minor, but visible cables create visual clutter that distracts. Use cable trays, Velcro straps, or zip ties to organize cables. Route them behind your desk whenever possible.

A clean aesthetic reduces cognitive load. When your workspace looks organized, your mind feels more organized. This psychological benefit makes cable management worth the effort.

## Personalization

Your home office should feel like yours. Add personal touches that inspire—a favorite plant, meaningful artwork, or objects that spark creativity. But remember: minimalism supports focus. Choose personal items carefully.

Books create visual interest and provide reference material. The Phaidon design books are both beautiful and informative. A quality notebook and pen offer analog alternatives to digital note-taking.

## Storage Solutions

Organization reduces friction. Simple storage solutions keep your workspace functional. A desk organizer for pens and small items. Drawer organizers for cables and accessories. A bookshelf for reference materials.

The goal isn't perfection—it's reducing the time spent searching for items. When everything has a place, you spend less time looking and more time working.

## The Audio Setup

Sound quality impacts productivity. Good headphones block distractions and provide quality audio for calls and music. The Sony WH-1000XM5 offers industry-leading noise cancellation. The AirPods Max provides seamless Apple ecosystem integration.

For shared spaces, consider speakers that provide clear audio without disturbing others. Quality audio equipment enhances both work calls and relaxation breaks.

## The Mobile Setup

Even in a home office, mobility matters. A quality laptop bag protects your device when you work from different locations. The Hardgraft Long Haul Briefcase or Nomad Base One Max offer both style and protection.

A portable monitor can extend your workspace when working away from your primary setup. These additions support flexibility without sacrificing productivity.

## The Small Details

Often, small details make the biggest difference. A quality desk mat protects your surface and adds texture. A coaster prevents water rings. A wrist rest improves typing comfort. These small additions accumulate into a significantly better experience.

Plants add life and improve air quality. A succulent or small plant requires minimal care but provides visual interest. Natural elements create a more pleasant work environment.

## The Routine

A great home office supports great routines. Set up your space to facilitate the habits that make you productive. If you drink coffee while working, make space for your setup. If you take standing breaks, ensure clear space to move.

Your workspace should support your work style, not fight against it. Arrange items based on how you actually work, not how you think you should work.

## What Doesn't Matter

Not everything needs to be perfect. A cheap desk lamp works fine if positioned correctly. A basic mouse is sufficient if it's comfortable. Expensive accessories don't automatically improve productivity.

Focus on the fundamentals: ergonomics, lighting, and organization. These make the biggest difference. Everything else is optional based on your preferences and budget.

## The Evolution

Your perfect home office evolves. Start with essentials: a good chair, proper monitor height, and adequate lighting. Add elements gradually as you discover what enhances your work.

Don't try to create the perfect setup immediately. Let it develop organically. Your needs will change, and your workspace should adapt.

## The Investment

Consider your home office an investment in your productivity and well-being. Quality ergonomic furniture prevents health issues. A good monitor reduces eye strain. These investments pay dividends over years of work.

But you don't need to spend thousands. Focus on the items you interact with most—your chair, keyboard, and monitor. These are worth investing in. Everything else can be added gradually.

## The Result

A well-designed home office isn't just about productivity—it's about creating a space you enjoy working in. When your workspace feels right, work feels easier. The right environment supports your best work.

After years of remote work, we've learned: the essentials matter most. Ergonomics, lighting, and organization form the foundation. Everything else enhances but doesn't replace these fundamentals. Focus on what truly makes a difference, and build from there.`,
        author: 'James Wilson',
        date: 'February 15, 2024',
        readTime: '5 min read',
        category: 'Workspace',
    },
];

interface BlogDetailProps {
    postId: number;
    onBack: () => void;
    onPostClick: (postId: number) => void;
}

function BlogDetail({ postId, onBack, onPostClick }: BlogDetailProps) {
    const post = blogPosts.find((p) => p.id === postId);

    // Get 3 suggested articles (excluding the current post)
    const suggestedPosts = blogPosts.filter((p) => p.id !== postId).slice(0, 3);

    if (!post) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
                <div className="text-center py-12">
                    <h1 className="text-2xl font-bold text-zinc-900 mb-2">Post Not Found</h1>
                    <p className="text-zinc-600 mb-6">
                        The blog post you're looking for doesn't exist.
                    </p>
                    <button
                        type="button"
                        onClick={onBack}
                        className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                        Back to Blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
            <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-6 transition-colors group"
                aria-label="Back to blog"
            >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={20} className="w-5 h-5" />
                <span className="font-medium">Back to Blog</span>
            </button>

            <article className="bg-white rounded-xl border border-zinc-200/80 overflow-hidden">
                {post.imageUrl ? (
                    <div className="aspect-video bg-zinc-100 overflow-hidden">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                        <span className="text-6xl font-bold text-zinc-400">{post.title[0]}</span>
                    </div>
                )}

                <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                            <HugeiconsIcon icon={Clock01Icon} size={16} className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 mb-8 pb-8 border-b border-zinc-200">
                        <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
                            <span className="text-sm font-medium text-zinc-700">
                                {post.author[0]}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-zinc-900">{post.author}</p>
                            <p className="text-sm text-zinc-500">{post.date}</p>
                        </div>
                    </div>

                    <div className="prose prose-zinc max-w-none">
                        <div className="text-zinc-700 leading-relaxed space-y-6 whitespace-pre-line">
                            {(() => {
                                const paragraphs = post.content.split('\n');
                                let emptyCounter = 0;

                                return paragraphs.map((paragraph) => {
                                    // Create a unique key based on content
                                    const createKey = (prefix: string, content: string) => {
                                        if (content.length > 0) {
                                            // Use content hash for non-empty paragraphs
                                            const contentHash = content
                                                .slice(0, 50)
                                                .replace(/\s+/g, '-')
                                                .replace(/[^a-z0-9-]/gi, '');
                                            return `${postId}-${prefix}-${contentHash}`;
                                        }
                                        // For empty paragraphs, use a counter that increments
                                        emptyCounter += 1;
                                        return `${postId}-${prefix}-empty-${emptyCounter}`;
                                    };

                                    if (paragraph.startsWith('## ')) {
                                        return (
                                            <h2
                                                key={createKey('heading', paragraph)}
                                                className="text-2xl font-bold text-zinc-900 mt-8 mb-4 first:mt-0"
                                            >
                                                {paragraph.replace('## ', '')}
                                            </h2>
                                        );
                                    }
                                    if (paragraph.trim() === '') {
                                        return <br key={createKey('br', paragraph)} />;
                                    }
                                    return (
                                        <p
                                            key={createKey('para', paragraph)}
                                            className="text-base leading-relaxed"
                                        >
                                            {paragraph}
                                        </p>
                                    );
                                });
                            })()}
                        </div>
                    </div>
                </div>
            </article>

            {/* Suggested Articles Section */}
            {suggestedPosts.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-zinc-900 mb-8">Suggested Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {suggestedPosts.map((suggestedPost) => (
                            <BlogCard
                                key={suggestedPost.id}
                                post={suggestedPost}
                                onPostClick={onPostClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;
export { blogPosts };
