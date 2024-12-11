import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  name: string;
  url: string;
  icon: LucideIcon;
}

export function SocialLink({ name, url, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={name}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}