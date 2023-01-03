import Link from 'next/link';
import styles from '@/components/layout.module.css';

export default function Header() {
  return (
    <footer className={`flex flex-col items-center justify-center p-1 mt-3 ${styles.footer}`}>
        <p>created by Kazuhiro Ito</p>
        <Link href="/" className="block text-xl text-blue-500">omomuro.dev</Link>
    </footer>
  )
}
