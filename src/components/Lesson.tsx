import { CheckCircle } from '@phosphor-icons/react'

// interface LessonProps {
//   title: string
//   slug: string
//   availableAt: string
//   type: 'live' | 'class'
// }

export function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-300">Tuesday, June 22, 7:00 pm</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="flex items-center justify-center gap-2 text-sm text-blue-500 font-medium">
            <CheckCircle size={20} />
            Released content
          </span>
          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
            LIVE
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          Opening of the event
        </strong>
      </div>
    </a>
  )
}
