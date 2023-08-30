import { Logo } from './Logo'

export function Header() {
  return (
    <header className="w-full flex py-5 justify-center items-center border-b bg-gray-700 border-gray-600">
      <Logo />
    </header>
  )
}
