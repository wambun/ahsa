import {
  Heart,
  Activity,
  Key,
  FileText,
  Calculator,
  Home,
  Shield,
  Building2,
  Scale,
  Fingerprint,
  Users,
  PiggyBank,
  GraduationCap,
  LucideIcon,
} from 'lucide-react';

export const serviceIconMap: Record<string, LucideIcon> = {
  heart: Heart,
  medical: Activity,
  key: Key,
  document: FileText,
  calculator: Calculator,
  home: Home,
  shield: Shield,
  building: Building2,
  scale: Scale,
  fingerprint: Fingerprint,
  family: Users,
  retirement: PiggyBank,
  education: GraduationCap,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className = 'w-6 h-6' }: ServiceIconProps) {
  const Icon = serviceIconMap[name] || Shield;
  return <Icon className={className} />;
}
