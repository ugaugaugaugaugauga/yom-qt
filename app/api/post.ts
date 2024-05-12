'use server'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

interface Post {
  applyContent: string
  impressionContent: string
  prayTime: string
  title: string
  verses: string
}

export const createPost = async ({
  applyContent,
  impressionContent,
  prayTime,
  title,
  verses,
}: Post) => {
  const user = await currentUser()
  if (!user) return null

  const userId = user.id

  const post = await db.post.create({
    data: {
      applyContent,
      impressionContent,
      prayTime,
      title,
      userId,
      verses,
    },
  })
  console.log('created post data', post)

  revalidatePath('/dashboard/diary')
  return post
}

export const getPosts = async () => {
  const user = await currentUser()
  if (!user) return null

  const userId = user.id

  const posts = await db.post.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return posts
}

export const getPost = async (postId: string) => {
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  })

  return post
}
