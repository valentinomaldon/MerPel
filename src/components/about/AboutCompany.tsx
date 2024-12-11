import { CompanyInfo } from './CompanyInfo';
import { ContactInfo } from './ContactInfo';
import { BusinessHours } from './BusinessHours';

export function AboutCompany() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-6">Sobre MerPel</h1>
      <CompanyInfo />
      <ContactInfo />
      <BusinessHours />
    </div>
  );
}