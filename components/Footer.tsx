import Link from 'next/link';

export default function Header() {
  return (
    <footer className="flex flex-col items-center justify-center border-t-2 p-1">
        <p>created by Kazuhiro Ito</p>
        <Link href="/" className="block text-xl text-blue-500">omomuro.dev</Link>
    </footer>
  )
}
