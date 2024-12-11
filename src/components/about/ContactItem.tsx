import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
}

export function ContactItem({ icon: Icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-3 text-gray-300">
      <Icon className="w-5 h-5 text-blue-400" />
      <span>{text}</span>
    </div>
  );
}