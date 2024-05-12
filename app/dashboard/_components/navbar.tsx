import { Logo2 } from '@/components/Logo2'
import { UserButton } from '@clerk/nextjs'

export const Navbar = () => {
  return (
    <nav className='fixed h-20 w-full max-w-[1920px] mx-auto bg-[#F9F8F4] z-10 flex items-center xl:px-32 lg:px-24 md:px-16 sm:px-12 px-8'>
      <div className='w-full flex justify-between items-center'>
        <Logo2 href='/dashboard' />
        <UserButton showName />
      </div>
    </nav>
  )
}
