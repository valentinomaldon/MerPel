import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactItem } from './ContactItem';

export function ContactInfo() {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
      <ContactItem
        icon={MapPin}
        text="Belisario Roldan 2150, El Palomar, Buenos Aires, Argentina"
      />
      <ContactItem
        icon={Phone}
        text="+54 9 11 2345-6789"
      />
      <ContactItem
        icon={Mail}
        text="contacto@merpel.com"
      />
    </div>
  );
}