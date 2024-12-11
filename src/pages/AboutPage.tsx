import { AboutCompany } from '../components/about/AboutCompany';
import { WhatsAppForm } from '../components/contact/WhatsAppForm';
import { MercadoLibreSection } from '../components/marketplace/MercadoLibreSection';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AboutCompany />
        <div className="space-y-8">
          <WhatsAppForm />
          <MercadoLibreSection />
        </div>
      </div>
    </div>
  );
}