import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
    `Nombre: ${formData.name}\nMensaje: ${formData.message}`
  )}`;

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4">Contactanos por WhatsApp</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1">Mensaje</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
          />
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full justify-center"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Enviar mensaje por WhatsApp
        </a>
      </form>
    </div>
  );
}