import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
} from '@phosphor-icons/react'
import { Player, Youtube, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      id
      title
      description
      videoId
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface VideoProps {
  lessonSlug: string
}

interface GetLessonBySlugResponse {
  lesson: {
    id: string
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  })

  if (!data) {
    return (
      <div className="flex-1">
        <p>carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Discord community
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Access the challenge
            </a>
          </div>
        </div>

        <div className="grid-cols-2 gap-8 mt-20 grid">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed flex-1">
              <strong className="text-2xl">Complementary Material</strong>
              <p className="text-sm text-gray-200 mt-2">
                Access complementary material to accelerate your development
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={40} />
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed flex-1">
              <strong className="text-2xl">Exclusive Wallpaper</strong>
              <p className="text-sm text-gray-200 mt-2">
                Download exclusive event wallpaper and customize your PC
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={40} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
