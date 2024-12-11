import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';
import { SearchBar } from '../components/search/SearchBar';
import { products } from '../data/products';
import { filterProducts } from '../utils/filters';

const categoryTitles = {
  kraft: 'Papel Kraft',
  tissue: 'Papel Seda',
  featured: 'Productos Destacados'
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 100] as [number, number],
    sortBy: 'name'
  });

  const baseProducts = products.filter(product => 
    category === 'featured' 
      ? product.featured 
      : product.category === category
  );

  const filteredProducts = filterProducts(
    baseProducts,
    searchQuery,
    filters.priceRange,
    filters.sortBy
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        {categoryTitles[category as keyof typeof categoryTitles]}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <SearchBar onSearch={setSearchQuery} />
            <ProductFilters onFilterChange={setFilters} />
          </div>
        </div>

        <div className="lg:col-span-3">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}