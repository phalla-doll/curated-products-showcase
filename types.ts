import type { ComponentType } from 'react';

export interface Product {
  id: number;
  brand: string;
  category: string;
  name: string;
  imageUrl: string;
  isStaffPick?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  // FIX: Use ComponentType from react instead of React.ComponentType to resolve the namespace error.
  icon: ComponentType<{ className?: string }>;
}
