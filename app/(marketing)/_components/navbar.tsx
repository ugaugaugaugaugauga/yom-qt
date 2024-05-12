import { Logo2 } from '@/components/Logo2'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LoginOptions } from './login-options'
import { Logo } from '@/components/Logo'

export const Navbar = () => {
  return (
    <nav className='fixed h-20 w-full bg-white z-10'>
      <div className='max-w-[1920px] mx-auto h-full flex items-center justify-between xl:px-32 lg:px-24 md:px-16 sm:px-12 px-8'>
        <div className='md:block hidden'>
          <Logo />
        </div>
        <Logo2 />
        <div className='flex items-center gap-x-10'>
          <Button asChild variant={'primary'}>
            <Link href={'/dashboard'}>yom 시작하기</Link>
          </Button>
          <LoginOptions />
        </div>
      </div>
    </nav>
  )
}
