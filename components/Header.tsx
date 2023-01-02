import Image from 'next/image';
import Link from 'next/link';
import { Comfortaa } from '@next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

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
            <li>
              <Link href="/labo" className=" text-blue-500 flex flex-wrap">
                {/* <FontAwesomeIcon icon={faGamepad} style={{ fontSize: "xxx-large", color: "gray", marginRight: "20px" }} /> */}
                <FontAwesomeIcon icon={faFlask} className="w-4 mr-1 hover:rotate-45 transition ease-in-out" />
                <span className="block">labo</span>
              </Link>
            </li>
            <li><Link href="/posts/first-post" className="text-blue-500">first-post</Link></li>
        </ul>

    </header>
  )
}
