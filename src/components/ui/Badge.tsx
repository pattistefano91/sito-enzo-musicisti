import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'neutral'
  children: ReactNode
  className?: string
}

export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  const variants = {
    primary: 'bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30',
    secondary: 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30',
    neutral: 'bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-3 py-1 text-label text-xs',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
