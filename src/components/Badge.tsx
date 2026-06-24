interface BadgeProps {
  children: React.ReactNode;
  variant?: 'category' | 'status-draft' | 'status-approved' | 'tag' | 'source' | 'default';
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  category:          'bg-blue-50 text-blue-700 border border-blue-200',
  'status-draft':    'bg-amber-50 text-amber-700 border border-amber-200',
  'status-approved': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  source:            'bg-violet-50 text-violet-700 border border-violet-200',
  tag:               'bg-slate-100 text-slate-600 border border-slate-200',
  default:           'bg-slate-100 text-slate-600 border border-slate-200',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
        ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
