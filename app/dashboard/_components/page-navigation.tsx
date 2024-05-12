import { NavLabel } from './nav-label'

export const PageNavigation = () => {
  return (
    <>
      <div className='mt-16 flex gap-x-8 text-xl'>
        <NavLabel text='yom QT' href='/dashboard/yom-qt' />
        <NavLabel text='QT 다이어리' href='/dashboard/diary' />
      </div>
    </>
  )
}
