import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const SidebarLink = ({ path, title, icon }: { path: string, title: string, icon: IconDefinition }) => {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <Link href={path} className={clsx(
            'group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg',
            'dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
            {'bg-gray-100 dark:bg-gray-700' : currentRoute === path}
        )}>
            <FontAwesomeIcon icon={icon} className={clsx(
                "mr-1 group-hover:rotate-45 ease-in-out flex-shrink-0 w-6 h-6",
                "text-gray-500 transition duration-75",
                "group-hover:text-gray-900 dark:group-hover:text-white",
                {'text-gray-900 dark:text-white' : currentRoute === path}
            )} />
            <span className="flex-1 ml-3 whitespace-nowrap">
                {title}
            </span>
        </Link>
    )
};

export default SidebarLink;
