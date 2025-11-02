import type { Product, Category } from './types';
import { LayersIcon, SparklesIcon, TagIcon, SmartphoneIcon, DesktopIcon, HomeIcon, BackpackIcon, BookIcon, MixIcon } from './components/icons/CategoryIcons';

export const categories: Category[] = [
  { id: 'all', name: 'All', count: 0, icon: LayersIcon },
  { id: 'new', name: 'New', count: 0, icon: SparklesIcon },
  { id: 'picks', name: 'Picks', count: 0, icon: TagIcon },
  { id: 'tech', name: 'Tech', count: 116, icon: SmartphoneIcon },
  { id: 'workspace', name: 'Workspace', count: 135, icon: DesktopIcon },
  { id: 'home', name: 'Home', count: 60, icon: HomeIcon },
  { id: 'carry', name: 'Carry', count: 85, icon: BackpackIcon },
  { id: 'books', name: 'Books', count: 31, icon: BookIcon },
  { id: 'lifestyle', name: 'Lifestyle', count: 21, icon: MixIcon },
];

export const products: Product[] = [
  {
    id: 1,
    brand: 'Apple',
    category: 'Tech',
    name: 'Studio Display',
    imageUrl: '/workLouder.webp',
  },
  {
    id: 2,
    brand: 'Grams28',
    category: 'Carry',
    name: '151 Stealth Backpack',
    imageUrl: '/workLouder.webp',
  },
  {
    id: 3,
    brand: 'Herman Miller',
    category: 'Workspace',
    name: 'Herman Miller Aeron',
    imageUrl: '/workLouder.webp',
  },
  {
    id: 4,
    brand: 'Apple',
    category: 'Tech',
    name: 'iPhone 14 Pro',
    imageUrl: '/workLouder.webp',
    isStaffPick: true,
  },
  {
    id: 5,
    brand: 'Porsche',
    category: 'Lifestyle',
    name: '911 Turbo S',
    imageUrl: '/workLouder.webp',
    isStaffPick: true,
  },
  {
    id: 6,
    brand: 'Omega',
    category: 'Lifestyle',
    name: 'Speedmaster',
    imageUrl: '/workLouder.webp',
    isStaffPick: true,
  },
];
