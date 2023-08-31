import { CheckCircle, Lock } from '@phosphor-icons/react'
import classNames from 'classnames'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug: paramSlug } = useParams<{ slug: string }>()

  const { title, slug, availableAt, type } = props

  const isActiveLesson = paramSlug === slug

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'MMMM d' • 'k'h'mm",
  )

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          { 'bg-green-500': isActiveLesson },
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'flex items-center justify-center gap-2 text-sm text-blue-500 font-medium',
                {
                  'text-white': isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Released content
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Soon
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold',
              {
                'border-white': isActiveLesson,
              },
            )}
          >
            {type === 'live' ? 'LIVE' : 'PRACTICAL CLASS'}
          </span>
        </header>

        <strong
          className={classNames('text-gray-200 mt-5 block', {
            'text-white': isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
