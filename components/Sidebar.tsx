import SidebarLink from '@/components/SidebarLink';
import { faFlask, faHome, faCat } from "@fortawesome/free-solid-svg-icons";
import styles from '@/components/layout.module.css';

export default function Sidebar() {
  return (
    <aside className={`w-[200px] fixed top-[50px] overflow-y-auto transition-all duration-300 ease-in-out -translate-x-64 ${styles.sidebar}
                       md:relative md:translate-x-0 md:inset-auto p-2
                    `}
           aria-label="Sidebar">
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
