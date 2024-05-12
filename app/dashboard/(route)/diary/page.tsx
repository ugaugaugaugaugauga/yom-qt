import { deletePost, getPosts } from '@/app/api/post'
import { PostItem } from './_components/post-item'

function formatKoreanDate(dateTime: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }

  const dateFormatter = new Intl.DateTimeFormat('ko-KR', options)

  return dateFormatter.format(dateTime)
}

const DiaryPage = async () => {
  const posts = await getPosts()

  return (
    <main className='mt-10'>
      {posts?.map((post, index) => (
        <PostItem
          key={post.id}
          id={post.id}
          index={index + 1}
          title={post.title}
          date={formatKoreanDate(post.createdAt)}
          href={`/post/${post.id}`}
        />
      ))}
    </main>
  )
}

export default DiaryPage
