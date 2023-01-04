import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from '@/components/layout.module.css';
import React from 'react';

export default function Header({setIsOpenSidebar, setIsOpenPcSidebar}) {
  const toggleSidebar = () => {
    setIsOpenSidebar((prev)=>!prev)
  }
  const togglePcSidebar = () => {
    setIsOpenPcSidebar((prev)=>!prev)
  }
  return (
    <header className={`z-10 px-3 flex items-center justify-between
                        dark:text-white dark:bg-gray-800
                      `}>
        {/* スマホ用 */}
        <FontAwesomeIcon icon={faBars}
            onClick={toggleSidebar}
            className="flex-shrink-0 w-6 h-6
                     text-gray-500 transition duration-75 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-white hover:cursor-pointer
                       md:hidden"
        />
        {/* pc用 */}
        <FontAwesomeIcon icon={faBars}
            onClick={togglePcSidebar}
            className="hidden flex-shrink-0 w-6 h-6
                     text-gray-500 transition duration-75 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-white hover:cursor-pointer
                       md:block"
        />
        <Link href="/" className="flex justify-center items-center mr-5">
            <Image priority src="/images/profile.png"
                    className="rounded-sm" height={40} width={40} alt="logo"/>
            <span className="text-xl font-bold">omomuro.dev</span>
        </Link>
        <div></div>
    </header>
  )
}
