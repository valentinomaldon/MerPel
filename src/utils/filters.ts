import { Product } from '../types';

export function filterProducts(
  products: Product[],
  query: string,
  priceRange: [number, number],
  sortBy: string
): Product[] {
  let filtered = products;

  // Apply search filter
  if (query) {
    const searchQuery = query.toLowerCase();
    filtered = filtered.filter(
      product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
  }

  // Apply price range filter
  filtered = filtered.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Apply sorting
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return filtered;
}