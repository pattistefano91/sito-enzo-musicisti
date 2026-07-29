import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  variant?: 'default' | 'elevated' | 'accent'
  children: ReactNode
  className?: string
}

export function Card({ variant = 'default', children, className }: CardProps) {
  const variants = {
    default: 'bg-[var(--color-surface-card)] border border-[var(--color-border)]',
    elevated: 'bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-lg shadow-black/40',
    accent: 'bg-[var(--color-surface-card)] border border-[var(--color-primary)]/30',
  }

  return (
    <div className={cn('rounded-[var(--radius-lg)] p-6', variants[variant], className)}>
      {children}
    </div>
  )
}
