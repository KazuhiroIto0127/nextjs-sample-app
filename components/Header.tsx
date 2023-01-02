import Image from 'next/image';
import Link from 'next/link';
import { Comfortaa } from '@next/font/google';

const comfortaa = Comfortaa({ weight: "700", subsets: ["latin"] })

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-yellow-100">
        <Link href="/" className="flex justify-center items-center mr-5">
            <Image priority src="/images/profile.png"
                    className="rounded-sm" height={50} width={50} alt="logo"/>
            <span className={`${comfortaa.className} text-2xl font-extrabold`}>omomuro.dev</span>
        </Link>
        <ul className="flex gap-2">
            <li><Link href="/posts/first-post" className="text-xl text-blue-500">first-post</Link></li>
            <li><Link href="/labo" className="text-xl text-blue-500">labo</Link></li>
        </ul>

    </header>
  )
}
