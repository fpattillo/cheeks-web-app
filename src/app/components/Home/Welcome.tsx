"use client";
import Image from 'next/image'
import CheeksLogo from '../../assets/cheeks-logo.png'
import { useSession } from 'next-auth/react';

export default function WelcomeScreen() {
  const { data: session } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black font-sans">
      <Image
        src={CheeksLogo}
        alt="Cheeks"
        width={150}
      />
      {(session && session.user ? 
        "Welcome " + session.user.name?.split(" ")[0] :
        "Welcome to Cheeks! Please sign in to continue") + "!"}
    </main>
  )
}
      