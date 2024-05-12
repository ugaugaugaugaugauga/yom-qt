import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heading } from './_components/heading'
import Link from 'next/link'

const MarketingPage = () => {
  return (
    <main className='pt-20 min-h-screen bg-[#F9F8F4]'>
      <div className='flex flex-col items-center'>
        <Heading />
        <div className='flex sm:mt-10 gap-x-10'>
          <Image src={'/image1.png'} alt={'image1'} width={270} height={180} />
          <Image
            className='sm:block hidden'
            src={'/image2.png'}
            alt={'image1'}
            width={270}
            height={180}
          />
          <Image
            className='lg:block hidden'
            src={'/image3.png'}
            alt={'image1'}
            width={270}
            height={180}
          />
        </div>
        <Button className='md:w-[200px] my-20' asChild>
          <Link href={'/dashboard'}>yom 시작하기</Link>
        </Button>
      </div>
    </main>
  )
}

export default MarketingPage
