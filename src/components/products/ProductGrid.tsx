import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { useCartStore } from '../../store/cartStore';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const addItem = useCartStore((state) => state.addItem);

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No hay productos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addItem(product)}
        />
      ))}
    </div>
  );
}