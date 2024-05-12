import { Navbar } from './_components/navbar'

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default MarketingLayout
