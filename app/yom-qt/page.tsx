'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import useTimer from '@/app/hooks/use-timer'
import Image from 'next/image'
import { createPost } from '../api/post'
import { useRouter } from 'next/navigation'

const title = '요한복음 1장 1절~14절'
const content =
  '1 태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라 2 그가 태초에 하나님과 함께 계셨고 3 만물이 그로 말미암아 지은바 되었으니 지은 것이 하나도 그가 없이는 된 것이 없느니라 4 그 안에 생명이 있었으니 이 생명은 사람들의 빛이라 5 빛이 어두움에 비취되 어두움이 깨닫지 못하더라 6 하나님께로서 보내심을 받은 사람이 났으니 이름은 요한이라 7 저가 증거하러 왔으니 곧 빛에 대하여 증거하고 모든 사람으로 자기를 인하여 믿게 하려 함이라 8 그는 이 빛이 아니요 이 빛에 대하여 증거하러 온 자라 9 참빛 곧 세상에 와서 각 사람에게 비취는 빛이 있었나니 10 그가 세상에 계셨으며 세상은 그로 말미암아 지은바 되었으되 세상이 그를 알지 못하였고 11 자기 땅에 오매 자기 백성이 영접지 아니하였으나 12 영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니 13 이는 혈통으로나 육정으로나 사람의 뜻으로 나지 아니하고 오직 하나님께로서 난 자들이니라 14 말씀이 육신이 되어 우리 가운데 거하시매 우리가 그 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라'

function splitVerseIntoArrayByNumber(verse: string): string[] {
  const verseArray: string[] = []
  let currentToken = ''

  for (let i = 0; i < verse.length; i++) {
    const char = verse[i]
    const isNumeric = !isNaN(parseInt(char))

    if (isNumeric) {
      if (!isNaN(parseInt(currentToken))) {
        currentToken += char
      } else {
        if (currentToken.trim() !== '') {
          verseArray.push(currentToken.trim())
        }
        currentToken = char
      }
    } else {
      if (isNaN(parseInt(currentToken))) {
        currentToken += char
      } else {
        if (currentToken.trim() !== '') {
          verseArray.push(currentToken.trim())
        }
        currentToken = char
      }
    }
  }

  if (currentToken.trim() !== '') {
    verseArray.push(currentToken.trim())
  }

  const result: string[] = []
  let currentVerse = ''

  for (const token of verseArray) {
    if (parseInt(token).toString() === token) {
      if (currentVerse !== '') {
        result.push(currentVerse.trim())
      }
      currentVerse = token
    } else {
      currentVerse += ' ' + token
    }
  }

  if (currentVerse !== '') {
    result.push(currentVerse.trim())
  }

  return result
}

const YomQTPage = () => {
  const router = useRouter()

  const versesArray = splitVerseIntoArrayByNumber(content)
  const [selectedVerses, setSelectedVerses] = useState<string[]>([])
  const [impression, setImpression] = useState<string>('')
  const [apply, setApply] = useState<string>('')
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean>(false)

  const { minutes, seconds, isActive, startTimer, pauseTimer, resetTimer } =
    useTimer()

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`

  const [isOpen, setIsOpen] = useState(false)

  const toggleVerseSelection = (verse: string) => {
    if (selectedVerses.includes(verse)) {
      setSelectedVerses((prevSelected) =>
        prevSelected.filter((v) => v !== verse),
      )
    } else {
      setSelectedVerses((prevSelected) => [...prevSelected, verse])
    }
  }

  const startPray = () => {
    setIsStarted(true)
    startTimer()
  }

  const stopPray = () => {
    setIsFinished(true)
    pauseTimer()
  }

  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const post = await createPost({
        applyContent: apply,
        impressionContent: impression,
        prayTime: formattedTime,
        title: title,
        verses: selectedVerses.reduce((prev, next) => prev + next, ''),
      })
      router.push('/dashboard/diary')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      {isOpen && (
        <div className='fixed z-20 bg-custom-dark-gray inset-0 flex flex-col items-center'>
          <h2 className='text-white text-xl xl:w-[1200px] px-5 pt-10 border-b border-white pb-2 mx-auto w-full'>
            기도하기
          </h2>
          <div className='flex flex-col mt-20 items-center'>
            {isStarted ? (
              <>
                {isFinished ? (
                  <div className='border-2 bg-custom-dark-gray border-white w-[250px] h-[250px] rounded-full hover:text-yellow-300 transition duration-200'>
                    <div className='p-3 w-full h-full'>
                      <div className='border-2 border-white rounded-full w-full h-full'>
                        <div className='h-full flex justify-center items-center text-2xl font-bold text-white'>
                          <Image
                            src={'/pray2.png'}
                            alt={'pray'}
                            height={250}
                            width={250}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={stopPray}
                    className='border-2 bg-white border-custom-dark-gray w-[250px] h-[250px] rounded-full hover:text-yellow-300 transition duration-200'
                  >
                    <div className='p-3 w-full h-full'>
                      <div className='border-2 border-custom-dark-gray rounded-full w-full h-full'>
                        <div className='h-full flex justify-center items-center text-2xl font-bold text-white'>
                          <Image
                            src={'/pray.png'}
                            alt={'pray'}
                            height={250}
                            width={250}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={startPray}
                className='border-2 border-white w-[250px] h-[250px] rounded-full hover:text-yellow-300 transition duration-200'
              >
                <div className='p-3 w-full h-full'>
                  <div className='border border-white rounded-full w-full h-full'>
                    <div className='h-full flex justify-center items-center text-2xl font-bold text-white'>
                      <div>
                        클릭 후<div /> 기도를 시작하세요
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            )}
            <div className='text-white text-3xl mt-10'>{formattedTime}</div>
          </div>
          <div className='flex justify-center items-center w-full mt-10'>
            <Button
              onClick={onSubmit}
              variant={'ivory'}
              className='md:w-[300px] w-full mx-10 sm:mx-0 '
              disabled={!isFinished || isLoading}
            >
              QT Diary 작성하기
            </Button>
          </div>
        </div>
      )}
      <main
        className={cn(
          'bg-custom-dark-gray min-h-screen text-white pb-20 w-full',
          isOpen && 'overflow-hidden',
        )}
      >
        <div className='xl:w-[1200px] w-full px-5 pt-10 mx-auto'>
          <h1 className='text-2xl border-b border-white pb-1 font-bold'>
            QT 본문
          </h1>
          <h2 className='mt-5 text-lg font-medium'>{title}</h2>

          <div className='mt-10 space-y-1'>
            {versesArray.map((verses, index) => (
              <span key={index} className={cn(index !== 0 && 'ml-3')}>
                <span
                  onClick={() => toggleVerseSelection(verses)}
                  className={cn(
                    'cursor-pointer',
                    selectedVerses.includes(verses) && 'bg-yellow-700',
                  )}
                >
                  {verses}
                </span>
              </span>
            ))}
          </div>
          <p className='mt-3 text-muted-foreground font-semibold'>
            *인상 깊은 구절을 클릭해 QT 다이어리에 반영하세요.
          </p>

          <h1 className='mt-10 text-2xl border-b border-white pb-1 font-bold'>
            QT 완료하기
          </h1>
          <h2 className='mt-5 text-lg font-medium'>인상 깊었던 구절</h2>
          <div className='mt-8'>
            {selectedVerses.map((verse, index) => (
              <span key={index}>{verse}</span>
            ))}
          </div>
          <h3 className='mt-10'>묵상하면서 느낀 점과 배운점들을 적어주세요.</h3>
          <Textarea
            className='mt-2 text-white bg-custom-dark-gray resize-none h-[300px]'
            placeholder='묵상하면서 느낀 점과 배운점들을 적어주세요.'
            value={impression}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setImpression(e.target.value)
            }
          />

          <h2 className='mt-10 font-medium'>적용하기</h2>
          <Textarea
            value={apply}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setApply(e.target.value)
            }
            className='mt-2 text-white bg-custom-dark-gray resize-none h-[300px] '
            placeholder='오늘 묵상한 내용들을 어떻게 적용 시킬지 작성해주세요.'
          />
        </div>
        <div className='flex justify-center items-center w-full mt-10'>
          <Button
            onClick={() => setIsOpen(true)}
            variant={'ivory'}
            className='md:w-[300px] w-full mx-10 sm:mx-0'
          >
            기도하로가기
          </Button>
        </div>
      </main>
    </>
  )
}

export default YomQTPage
