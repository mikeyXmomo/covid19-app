import 'twin.macro'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav tw="fixed bg-white w-full flex justify-center items-center">
      <div tw="w-4/5 py-4 flex flex-row justify-between items-center">
        <div>
          <img alt="COVID19 App Logo" src="/Logo.svg" tw="w-4/5" />
        </div>
        <div tw="flex flex-row space-x-6">
          <ul tw="list-none flex flex-row justify-center items-center">
            <li tw="text-lg px-4 text-green-999">Overview</li>
            <li tw="text-lg px-4 text-green-999">Contagion</li>
            <li tw="text-lg px-4 text-green-999">Symptoms</li>
            <li tw="text-lg px-4 text-green-999">Prevention</li>
          </ul>
          <button tw="px-10 py-2 text-red-999 border text-lg font-medium border-red-999 rounded-full">Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
