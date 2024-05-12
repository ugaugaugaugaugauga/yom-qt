import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href?: string
}

export const Logo2 = ({ href = '/' }: Props) => {
  return (
    <Link href={href}>
      <Image src={'/yom.png'} alt={'yom'} width={66} height={44} />
    </Link>
  )
}
