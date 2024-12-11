import { ShoppingBag } from 'lucide-react';

export function MercadoLibreSection() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4">Encontranos en Mercado Libre</h2>
      <p className="text-gray-300 mb-4">
        Visitá nuestra tienda oficial en Mercado Libre para ver todos nuestros productos y aprovechar los beneficios de la plataforma.
      </p>
      <a
        href="https://mercadolibre.com.ar/merpel"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors w-full justify-center"
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        Ver tienda en Mercado Libre
      </a>
    </div>
  );
}