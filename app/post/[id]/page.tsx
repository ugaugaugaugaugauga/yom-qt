import { getPost } from '@/app/api/post'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

const PostIdPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id)

  return (
    <main className='bg-custom-dark-gray min-h-screen text-white pb-20 w-full'>
      <div className='xl:w-[1200px] w-full px-5 pt-10 mx-auto'>
        <h1 className='text-2xl border-b border-white pb-1 font-bold'>
          {post?.title}
        </h1>

        <h2 className='mt-5 text-lg font-medium'>인상 깊었던 구절</h2>
        <div className='mt-8'>{post?.verses}</div>
        <h3 className='mt-10'>묵상하면서 느낀 점과 배운점들을 적어주세요.</h3>
        <Textarea
          className='mt-2 text-white bg-custom-dark-gray resize-none h-[300px]'
          readOnly
          placeholder='묵상하면서 느낀 점과 배운점들을 적어주세요.'
          value={post?.impressionContent}
        />

        <h2 className='mt-10 font-medium'>적용하기</h2>
        <Textarea
          value={post?.applyContent}
          className='mt-2 text-white bg-custom-dark-gray resize-none h-[300px] '
          placeholder='오늘 묵상한 내용들을 어떻게 적용 시킬지 작성해주세요.'
          readOnly
        />
      </div>
      <div className='flex justify-center mt-10'>
        <Button
          asChild
          variant={'ivory'}
          className='md:w-[300px] w-full mx-10 sm:mx-0'
        >
          <Link href={'/dashboard/diary'}>dashboard 로 돌아가기</Link>
        </Button>
      </div>
    </main>
  )
}

export default PostIdPage
