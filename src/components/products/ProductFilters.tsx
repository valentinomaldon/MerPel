import { useState } from 'react';

interface ProductFiltersProps {
  onFilterChange: (filters: ProductFilters) => void;
}

interface ProductFilters {
  priceRange: [number, number];
  sortBy: 'price-asc' | 'price-desc' | 'name';
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    priceRange: [0, 100],
    sortBy: 'name'
  });

  const handleChange = (key: keyof ProductFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-4">
      <div>
        <label className="block text-white mb-2">Ordenar por</label>
        <select
          value={filters.sortBy}
          onChange={(e) => handleChange('sortBy', e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
        >
          <option value="name">Nombre</option>
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
        </select>
      </div>

      <div>
        <label className="block text-white mb-2">Rango de Precio</label>
        <div className="flex gap-4">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handleChange('priceRange', [Number(e.target.value), filters.priceRange[1]])}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
            min="0"
          />
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handleChange('priceRange', [filters.priceRange[0], Number(e.target.value)])}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
            min="0"
          />
        </div>
      </div>
    </div>
  );
}