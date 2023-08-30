import { CheckCircle, Lock } from '@phosphor-icons/react'
import { isPast, format } from 'date-fns'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { title, slug, availableAt, type } = props

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'MMMM d' • 'k'h'mm",
  )

  return (
    <a href={`/${slug}`}>
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center justify-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Released content
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Soon
            </span>
          )}

          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
            {type === 'live' ? 'LIVE' : 'PRACTICAL CLASS'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  )
}
