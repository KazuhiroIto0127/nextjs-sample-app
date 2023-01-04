import SidebarLink from '@/components/SidebarLink';
import { faFlask, faHome, faCat } from "@fortawesome/free-solid-svg-icons";
import styles from '@/components/layout.module.css';
import clsx from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function Sidebar({isOpenSidebar, setIsOpenSidebar, isOpenPcSidebar, setIsOpenPcSidebar}) {
  const toggleSidebar = () => {
    setIsOpenSidebar((prev)=>!prev)
  }
  return (
    <>
      {/* スマホ用のoverlay背景 */}
      <div className={clsx(
            'fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 z-30',
            { 'visible': isOpenSidebar }, { 'invisible': !isOpenSidebar }
      )}
           onClick={toggleSidebar}
      ></div>

      {/* サイドバー */}
      <aside className={twMerge(clsx(
        'w-[200px] min-w-[200px] overflow-y-auto transition-all duration-300 ease-in-out hidden',
        'md:block md:inset-auto',
        { 'hidden md:block': isOpenPcSidebar }, { 'hidden md:hidden': !isOpenPcSidebar },
        { 'block z-40 fixed top-0': isOpenSidebar },
        ))}
        aria-label="Sidebar"
      >
          <div className="overflow-y-auto px-3 bg-gray-50 dark:bg-gray-800 h-full min-h-screen">
              <div className={clsx("flex h-[50px] justify-center items-center",
                                  { 'block': isOpenSidebar }, { 'hidden': !isOpenSidebar }
              )}>
                <FontAwesomeIcon icon={faBars}
                  className="flex-shrink-0 w-6 h-6 mr-2
                        text-gray-500 transition duration-75 dark:text-gray-400
                        hover:text-gray-900 dark:hover:text-white hover:cursor-pointer"
                  onClick={toggleSidebar}
                />
                <Link href="/" className="flex items-center">
                    <Image priority src="/images/profile.png"
                            className="rounded-sm" height={40} width={40} alt="logo"/>
                    <span className="font-bold text-sm">omomuro.dev</span>
                </Link>
              </div>
              <ul className="space-y-2">
                  <li><SidebarLink path="/" title="ホーム" icon={faHome} /></li>
                  <li><SidebarLink path="/labo" title="ラボ" icon={faFlask} /></li>
                  <li><SidebarLink path="/posts/first-post" title="about" icon={faCat} /></li>
              </ul>
              <p className={twMerge(clsx("text-red-500 text-blue-500",{'text-yellow-500' : false}))}>test</p>
          </div>
      </aside>
    </>
  )
}
