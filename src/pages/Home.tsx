import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80"
          alt="Paper craft hero"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Calidad en Cada Hoja
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Descubre nuestra selección premium de papeles y productos artesanales
            </p>
            <Link
              to="/category/kraft"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Catálogo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Nuestras Categorías
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link
            to="/category/kraft"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80"
              alt="Papel Kraft"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Papel Kraft</h3>
            </div>
          </Link>
          <Link
            to="/category/tissue"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80"
              alt="Papel Seda"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Papel Seda</h3>
            </div>
          </Link>
          <Link
            to="/featured"
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1598620617137-2ab990aadd37?auto=format&fit=crop&q=80"
              alt="Productos Destacados"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Destacados</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}