import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-yellow-100">
        <Link href="/" className="flex justify-center items-center">
            <Image priority src="/images/profile.png"
                    className="rounded-sm" height={50} width={50} alt="logo"/>
            <span className="text-2xl font-bold text-indigo-900">omomuro.dev</span>
        </Link>

    </header>
  )
}
