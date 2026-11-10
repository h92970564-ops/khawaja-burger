export interface MenuItem {
  id: string;
  name: string;
  category: 'beef' | 'chicken' | 'sides' | 'combos';
  categoryLabel: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  isSpicy?: boolean;
  calories?: number;
  prepTime?: string;
  badge?: string;
}

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface CartItemOption {
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Extra Fiery';
  extras: CustomizationOption[];
  notes?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  customization?: CartItemOption;
  totalPrice: number;
}

export interface BranchLocation {
  branchName: string;
  address: string;
  phone: string;
  whatsapp: string;
  directionsUrl: string;
}
