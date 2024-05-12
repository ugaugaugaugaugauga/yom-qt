import Link from 'next/link'

const YomQTPage = () => {
  return (
    <main className='bg-[#343434] rounded-xl h-[600px]'>
      <div className='h-full w-full p-5'>
        <div className='border-[1.5px] border-white h-full rounded-xl text-white'>
          <div className='mt-14 flex justify-center'>
            <div className='flex flex-col w-[400px] items-center text-center'>
              <h1 className='text-4xl '>yom QT</h1>
              <div className='mt-3 border-t border-white w-full' />
              <p className=' text-xl'>
                성경 본문 읽기, 목상, 그리고 QT 다이어리까지의 모든 과정을
                제공합니다.
              </p>
            </div>
          </div>
          <div className='flex justify-center mt-20'>
            <Link
              href={'/yom-qt'}
              className='border-2 border-white w-[250px] h-[250px] rounded-full hover:text-yellow-300 transition duration-200'
            >
              <div className='p-3 w-full h-full'>
                <div className='border border-white rounded-full w-full h-full'>
                  <div className='h-full flex justify-center items-center text-4xl font-light'>
                    시작하기
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default YomQTPage
