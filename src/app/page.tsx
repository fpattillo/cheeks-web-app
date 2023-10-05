import Image from 'next/image'
import CheeksLogo from './assets/cheeks-logo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      <Image
        src={CheeksLogo}
        alt="Cheeks"
        width={150}
      />
      Welcome to Cheeks!
    </main>
  )
}
