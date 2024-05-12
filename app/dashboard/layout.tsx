import { Navbar } from './_components/navbar'
import { PageNavigation } from './_components/page-navigation'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='pt-20 min-h-screen bg-custom-ivory '>
        <div className='mt-10 max-w-[1200px] mx-auto flex flex-col xl:px-0 md:px-10 px-5'>
          <h2 className='text-3xl font-medium'>홈</h2>
          <PageNavigation />
          <div className='mt-10' />
          {children}
        </div>
      </main>
    </>
  )
}

export default DashboardLayout
