import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

export const LoginOptions = () => {
  return (
    <div className='md:flex hidden justify-center'>
      <SignedIn>
        <ClerkLoading>
          <Loader className='animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </SignedIn>
      <SignedOut>
        <ClerkLoading>
          <Loader className='animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignInButton mode='modal'>
            <button>로그인</button>
          </SignInButton>
        </ClerkLoaded>
        <span className='mx-1'>/</span>
        <ClerkLoading>
          <Loader className='animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignUpButton mode='modal'>
            <button>회원가입</button>
          </SignUpButton>
        </ClerkLoaded>
      </SignedOut>
    </div>
  )
}
