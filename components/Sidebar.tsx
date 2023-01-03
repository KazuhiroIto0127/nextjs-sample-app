import SidebarLink from '@/components/SidebarLink';
import { faFlask, faHome, faCat } from "@fortawesome/free-solid-svg-icons";
import styles from '@/components/layout.module.css';
import clsx from 'clsx';

export default function Sidebar({isOpenSidebar}:{isOpenSidebar: boolean}) {
  return (
    <aside className={clsx(
      'w-[200px] fixed top-[50px] overflow-y-auto transition-all duration-300 ease-in-out -translate-x-64',
      styles.sidebar,
      'md:relative md:translate-x-0 md:inset-auto p-2',
      { 'text-red-500 translate-x-0': isOpenSidebar }
      )}
      aria-label="Sidebar"
    >
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
                <li><SidebarLink path="/" title="ホーム" icon={faHome} /></li>
                <li><SidebarLink path="/labo" title="ラボ" icon={faFlask} /></li>
                <li><SidebarLink path="/posts/first-post" title="about" icon={faCat} /></li>
            </ul>
        </div>
    </aside>
  )
}
