<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Curated Products Showcase

A modern, responsive web application for discovering well-designed, carefully curated products across various categories including Tech, Workspace, Home, Carry, Books, and Lifestyle. Built with React, TypeScript, and Vite, featuring a clean and intuitive user interface inspired by modern e-commerce design.

## ✨ Features

- **Product Discovery**: Browse through a curated collection of premium products
- **Category Filtering**: Filter products by categories (All, New, Picks, Tech, Workspace, Home, Carry, Books, Lifestyle) with URL-based navigation
- **Search Functionality**: Search products by brand, name, category, or description
- **Product Details Modal**: Click on any product to view detailed information including price, description, and product details
- **Shopping Cart**: Full shopping cart functionality with:
  - Add products to cart with quantity selection
  - View cart items in a slide-out drawer
  - Update item quantities
  - Remove items from cart
  - Persistent cart storage using localStorage
  - Cart item count badge in header
- **Order Confirmation**: Checkout flow with order confirmation dialog
- **Staff Picks**: Highlighted products marked as staff favorites
- **Email Subscription**: Hero section with newsletter subscription form
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, minimalist design with smooth hover effects and transitions
- **Interactive Navigation**: Header with navigation links (Discover, Browse, Blog, Info) and search functionality

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **TypeScript** 5.8.2 - Type safety
- **Vite** 6.2.0 - Build tool and dev server
- **Tailwind CSS** 4.0.0 - Utility-first CSS framework
- **Biome** 2.3.2 - Fast linter and formatter
- **Bona Nova & Space Grotesk** - Modern typography (from Google Fonts)

## 📁 Project Structure

```
product-showcase/
├── src/                  # Source code directory
│   ├── components/       # React components
│   │   ├── Header.tsx    # Navigation header with search and cart
│   │   ├── Hero.tsx      # Hero section with subscription form
│   │   ├── CategoryFilters.tsx  # Category filter buttons
│   │   ├── ProductGrid.tsx      # Product grid layout with filtering
│   │   ├── ProductCard.tsx      # Individual product card component
│   │   ├── ProductDialog.tsx    # Product detail modal dialog
│   │   ├── Drawer.tsx           # Slide-out drawer component (for cart)
│   │   ├── CartItemsList.tsx    # Cart items display component
│   │   ├── OrderConfirmationDialog.tsx  # Order confirmation modal
│   │   ├── Footer.tsx           # Footer component
│   │   └── icons/        # Icon components
│   │       ├── CategoryIcons.tsx  # Category-specific icons
│   │       └── CoreIcons.tsx      # Core UI icons
│   ├── hooks/            # Custom React hooks (ready for future use)
│   ├── lib/              # Utility libraries
│   │   └── fonts.ts      # Font configuration
│   ├── utils/            # Utility functions
│   │   └── cart.ts       # Cart management utilities (localStorage)
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Application entry point
│   ├── index.css         # Global styles
│   ├── types.ts          # TypeScript type definitions
│   └── constants.ts      # App constants (products, categories)
├── public/               # Static assets (product images)
├── dist/                 # Production build output
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── biome.json            # Biome linter/formatter configuration
├── package.json          # Dependencies and scripts
└── metadata.json         # Project metadata
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
   
   The project supports environment variables for the Gemini API key (configured in `vite.config.ts`). If needed, create a `.env.local` file:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   
   Note: Currently, the Gemini API key is not actively used in the application implementation.

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
- `npm run lint` - Run Biome linter and auto-fix issues
- `npm run lint:check` - Check for linting issues without fixing
- `npm run format` - Format code using Biome
- `npm run format:check` - Check code formatting without fixing
- `npm run check` - Run both linter and formatter with auto-fix
- `npm run check:ci` - Run both linter and formatter (CI mode, no auto-fix)
- `npm run fix` - Alias for `check` command

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
- Click to open product detail dialog

### Product Dialog
- Full-screen modal dialog for product details
- Product image with staff pick badge
- Product information (brand, category, name, price)
- Product description
- Quantity selector (increment/decrement)
- Add to cart functionality
- Keyboard navigation (ESC to close)
- Backdrop click to close

### Shopping Cart (Drawer)
- Slide-out drawer component from the right
- Cart items list with product images
- Quantity management (increase/decrease)
- Remove items functionality
- Cart total calculation
- Empty cart state
- Checkout button with loading state
- Persistent storage using localStorage

### Order Confirmation Dialog
- Success confirmation after checkout
- Developer note with social links
- Smooth animations and transitions

## 🎯 Product Data Structure

Products are defined in `src/constants.ts` with the following structure:

```typescript
interface Product {
  id: number;
  brand: string;
  category: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  isStaffPick?: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
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
- **Typography**: Space Grotesk (default) and Bona Nova fonts for modern readability
- **Border Radius**: Rounded-full for buttons and inputs
- **Shadows**: Subtle shadow-sm for depth
- **Transitions**: Smooth 200-300ms transitions for hover effects
- **Responsive Breakpoints**: sm (640px), lg (1024px)

## 🔧 Configuration

### Vite Configuration
- Development server runs on port 3000
- Host set to `0.0.0.0` for network access
- React plugin enabled
- Path alias `@` configured for root directory (`./src/*`)
- Environment variables support for Gemini API key
- Source files organized in `src/` directory (standard Vite convention)

### TypeScript Configuration
- Target: ES2022
- Strict type checking enabled
- React JSX transform enabled
- Path aliases configured (`@/*` → `./src/*`)
- Module resolution: bundler
- Experimental decorators enabled

### Biome Configuration
- Fast linter and formatter (alternative to ESLint + Prettier)
- 4-space indentation
- Single quotes for JavaScript/TypeScript
- Double quotes for JSX
- Line width: 100 characters
- Organized imports enabled

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
- Category filtering and search use URL parameters for shareable links
- Cart state is persisted in localStorage and synchronized across components using custom events
- Custom events: `cartupdated`, `categorychange`, `searchchange`, `focussearch`
- Product filtering supports both category and search parameters simultaneously
- Project follows standard React/Vite folder structure with `src/` directory organization
- Biome is used for linting and formatting (faster alternative to ESLint + Prettier)
- All components are accessible with proper ARIA labels and keyboard navigation

## 🔮 Future Enhancements

Potential improvements:
- Connect to a backend API for dynamic product data
- Add user authentication
- Integrate with payment gateway for real checkout
- Add product reviews and ratings
- Add admin panel for product management
- Implement filtering by price, brand, etc.
- Add sorting options (price, name, date added)
- Product comparison feature
- Wishlist functionality
- Product recommendations
- Analytics and tracking
- Internationalization (i18n)

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Vite**
