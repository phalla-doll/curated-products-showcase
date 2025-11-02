<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Curated Products Showcase

A modern, responsive web application for discovering well-designed, carefully curated products across various categories including Tech, Workspace, Home, Carry, Books, and Lifestyle. Built with React, TypeScript, and Vite, featuring a clean and intuitive user interface inspired by modern e-commerce design.

## ✨ Features

- **Product Discovery**: Browse through a curated collection of premium products
- **Category Filtering**: Filter products by categories (All, New, Picks, Tech, Workspace, Home, Carry, Books, Lifestyle)
- **Staff Picks**: Highlighted products marked as staff favorites
- **Email Subscription**: Hero section with newsletter subscription form
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, minimalist design with smooth hover effects and transitions
- **Interactive Navigation**: Header with navigation links (Discover, Browse, Blog, Info) and search functionality

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **TypeScript** 5.8.2 - Type safety
- **Vite** 6.2.0 - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (via className)
- **Inter Font** - Modern typography

## 📁 Project Structure

```
product-showcase/
├── src/                  # Source code directory
│   ├── components/       # React components
│   │   ├── Header.tsx    # Navigation header with search
│   │   ├── Hero.tsx      # Hero section with subscription form
│   │   ├── CategoryFilters.tsx  # Category filter buttons
│   │   ├── ProductGrid.tsx      # Product grid layout
│   │   ├── ProductCard.tsx      # Individual product card component
│   │   └── icons/        # Icon components
│   │       ├── CategoryIcons.tsx  # Category-specific icons
│   │       └── CoreIcons.tsx      # Core UI icons
│   ├── hooks/            # Custom React hooks (ready for future use)
│   ├── lib/              # Utility libraries
│   │   └── fonts.ts      # Font configuration
│   ├── utils/            # Utility functions (ready for future use)
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Application entry point
│   ├── index.css         # Global styles
│   ├── types.ts          # TypeScript type definitions
│   └── constants.ts      # App constants (products, categories)
├── public/               # Static assets
│   └── workLouder.webp   # Product images
├── .env.example          # Environment variables template
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository** (or download the project)
   ```bash
   git clone <repository-url>
   cd product-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Copy `.env.example` to `.env.local` and configure your Gemini API key:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   
   Note: The Gemini API key is configured in `vite.config.ts` but may not be actively used in the current implementation.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   The application will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start the development server (runs on port 3000)
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 🎨 Key Components

### Header
- Navigation bar with logo (asterisk icon)
- Navigation links: Discover, Browse, Blog, Info
- Search button (icon only)

### Hero Section
- Main heading: "Discover well-designed, carefully curated products"
- Subtitle with value proposition
- Email subscription form with rounded input and button

### Category Filters
- Horizontal scrollable category buttons
- Icons for each category
- Product count badges
- Active state highlighting
- "See More" button

### Product Grid
- Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- Product cards with hover effects
- Staff pick badges
- Expand button on hover

### Product Card
- Product image with aspect ratio preservation
- Brand and category information
- Product name
- Hover effects (scale and expand button)
- Staff pick badge indicator

## 🎯 Product Data Structure

Products are defined in `src/constants.ts` with the following structure:

```typescript
interface Product {
  id: number;
  brand: string;
  category: string;
  name: string;
  imageUrl: string;
  isStaffPick?: boolean;
}
```

Categories include:
- **All** - Shows all products
- **New** - Newly added products
- **Picks** - Staff picks
- **Tech** - Technology products
- **Workspace** - Office and workspace items
- **Home** - Home and living products
- **Carry** - Bags and carry items
- **Books** - Books and reading materials
- **Lifestyle** - Lifestyle products

## 🎨 Design Features

- **Color Scheme**: Zinc-based color palette (zinc-50, zinc-900, etc.)
- **Typography**: Inter font family for modern readability
- **Border Radius**: Rounded-full for buttons and inputs
- **Shadows**: Subtle shadow-sm for depth
- **Transitions**: Smooth 200-300ms transitions for hover effects
- **Responsive Breakpoints**: sm (640px), lg (1024px)

## 🔧 Configuration

### Vite Configuration
- Development server runs on port 3000
- Host set to `0.0.0.0` for network access
- React plugin enabled
- Path alias `@` configured for root directory
- Environment variables support for Gemini API key
- Source files organized in `src/` directory (standard Vite convention)

### TypeScript Configuration
- Strict type checking enabled
- React types included
- Path aliases configured

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Static Hosting

The built application can be deployed to any static hosting service:
- **Vercel**: Connect your repository and deploy
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions or manual deployment
- **AWS S3**: Upload the `dist` folder contents

## 📝 Development Notes

- The application uses functional components with React hooks
- TypeScript interfaces ensure type safety
- Component props are properly typed
- Icons are implemented as React components
- Product data is currently static (stored in `src/constants.ts`)
- Category filtering state is managed locally in `CategoryFilters` component
- Project follows standard React/Vite folder structure with `src/` directory organization
- Ready-to-use folders (`hooks/`, `utils/`) for future expansion

## 🔮 Future Enhancements

Potential improvements:
- Connect to a backend API for dynamic product data
- Implement search functionality
- Add product detail pages
- Add user authentication
- Implement shopping cart functionality
- Add product reviews and ratings
- Integrate with payment gateway
- Add admin panel for product management
- Implement filtering by price, brand, etc.
- Add sorting options

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Vite**
