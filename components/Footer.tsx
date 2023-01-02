import Link from 'next/link';

export default function Header() {
  return (
    <footer className="flex justify-center">
        <Link href="/" className="text-xl text-blue-500">Back to home</Link>
    </footer>
  )
}
