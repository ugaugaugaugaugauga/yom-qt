'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  text: string
  href: string
}

export const NavLabel = ({ text, href }: Props) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn(active && 'font-bold border-b-4 border-black')}
    >
      {text}
    </Link>
  )
}
