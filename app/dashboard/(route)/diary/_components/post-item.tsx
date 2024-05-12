'use client'

import { deletePost } from '@/app/api/post'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'

type Props = {
  index: number
  id: string
  title: string
  date: string
  href: string
}

export const PostItem = ({ index, id, title, date, href }: Props) => {
  const onClick = async (event: React.MouseEvent) => {
    event.preventDefault()
    try {
      await deletePost(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Link
      href={href}
      className='border-b border-black justify-between flex py-2 cursor-pointer'
    >
      <div># {index}</div>
      <div>{title}</div>
      <div className='flex items-center gap-x-2'>
        <Trash2
          onClick={onClick}
          className='text-gray-500 h-4 w-4 hover:text-rose-500'
        />
        <div>{date}</div>
      </div>
    </Link>
  )
}
