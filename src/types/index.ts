export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'kraft' | 'tissue' | 'specialty';
  image: string;
  stock: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  items: CartItem[];
}