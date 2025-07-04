export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  hoverShadowColor: string;
  ctaColor: string;
  bgColor: string;  // new background color class
}
