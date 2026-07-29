import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({ orientation = 'horizontal', className }: DividerProps) {
  if (orientation === 'vertical') {
    return <div className={cn('w-px self-stretch bg-[var(--color-border)]', className)} />
  }
  return <hr className={cn('border-0 border-t border-[var(--color-border)]', className)} />
}
