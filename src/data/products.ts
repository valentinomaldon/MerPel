import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'kraft-1',
    name: 'Papel Kraft Natural 90g',
    description: 'Papel kraft natural de alta resistencia, ideal para embalajes y manualidades',
    price: 2.50,
    category: 'kraft',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80',
    stock: 100
  },
  {
    id: 'kraft-2',
    name: 'Papel Kraft Decorativo',
    description: 'Papel kraft con diseños estampados para regalo y decoración',
    price: 3.75,
    category: 'kraft',
    image: 'https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80',
    stock: 75
  },
  {
    id: 'tissue-1',
    name: 'Papel Seda Blanco',
    description: 'Papel seda suave y delicado, perfecto para envolver regalos',
    price: 1.25,
    category: 'tissue',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80',
    stock: 150
  },
  {
    id: 'tissue-2',
    name: 'Set Papel Seda Colores',
    description: 'Pack de papel seda en variados colores pasteles',
    price: 5.99,
    category: 'tissue',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80',
    stock: 50,
    featured: true
  },
  {
    id: 'specialty-1',
    name: 'Papel Artesanal Reciclado',
    description: 'Papel artesanal hecho a mano con fibras naturales',
    price: 4.50,
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1598620617137-2ab990aadd37?auto=format&fit=crop&q=80',
    stock: 30,
    featured: true
  }
];