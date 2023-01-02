import Image from 'next/image';
import Link from 'next/link';
import { Comfortaa } from '@next/font/google';

const comfortaa = Comfortaa({ weight: "700", subsets: ["latin"] })

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-yellow-100">
        <Link href="/" className="flex justify-center items-center">
            <Image priority src="/images/profile.png"
                    className="rounded-sm" height={50} width={50} alt="logo"/>
            <span className={`${comfortaa.className} text-2xl font-extrabold`}>omomuro.dev</span>
        </Link>

    </header>
  )
}
