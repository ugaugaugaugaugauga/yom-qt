import Link from 'next/link'

type Props = {
  index: number
  title: string
  date: string
  href: string
}

export const PostItem = ({ index, title, date, href }: Props) => {
  return (
    <Link
      href={href}
      className='border-b border-black justify-between flex py-2 cursor-pointer'
    >
      <div># {index}</div>
      <div>{title}</div>
      <div>{date}</div>
    </Link>
  )
}
