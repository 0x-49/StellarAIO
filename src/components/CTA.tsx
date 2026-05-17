import { AFFILIATE_URL } from '../data/links';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
};

const SIZE_STYLES: Record<string, string> = {
  sm: 'text-sm px-4 py-2',
  md: '',
  lg: 'text-base px-7 py-4',
};

export default function CTA({ children, variant = 'primary', size = 'md', href = AFFILIATE_URL, className = '' }: Props) {
  const sizeClass = SIZE_STYLES[size] ?? '';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored"
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${sizeClass} ${className}`}
    >
      {children}
    </a>
  );
}
