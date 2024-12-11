import { Facebook, Instagram, Twitter, ShoppingBag, MessageCircle } from 'lucide-react';
import { SocialLink } from './SocialLink';

export function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/merpel',
      icon: Facebook
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/merpel_oficial',
      icon: Instagram
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/merpel',
      icon: Twitter
    },
    {
      name: 'Mercado Libre',
      url: 'https://mercadolibre.com.ar/merpel',
      icon: ShoppingBag
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5491112345678',
      icon: MessageCircle
    }
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">MerPel</h3>
            <p className="text-gray-400">
              Calidad y variedad en papelería para todas tus necesidades creativas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/category/kraft" className="text-gray-400 hover:text-white transition-colors">
                  Papel Kraft
                </a>
              </li>
              <li>
                <a href="/category/tissue" className="text-gray-400 hover:text-white transition-colors">
                  Papel Seda
                </a>
              </li>
              <li>
                <a href="/featured" className="text-gray-400 hover:text-white transition-colors">
                  Destacados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contacto@merpel.com</li>
              <li>WhatsApp: +54 9 11 2345-6789</li>
              <li>Dirección: Belisario Roldan 2150, El Palomar, Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MerPel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}