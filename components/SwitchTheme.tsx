import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faDesktop } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';

export const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) { return null }

    return (
        <div>
            <button>
                <FontAwesomeIcon icon={ resolvedTheme === 'light' ? faSun : faMoon }
                    className={clsx('w-5',
                        { 'text-red-400': resolvedTheme === 'light'},
                        { 'text-yellow-400': resolvedTheme === 'dark'},
                )}>
                </FontAwesomeIcon>
            </button>
            <ul>
                <li className='flex gap-1 hover:cursor-pointer text-red-400' onClick={()=> setTheme('light')} >
                    <FontAwesomeIcon icon={faSun} className="w-5"></FontAwesomeIcon>
                    <span>Light</span>
                </li>
                <li className='flex gap-1 hover:cursor-pointer text-yellow-400' onClick={()=> setTheme('dark')}>
                    <FontAwesomeIcon icon={faMoon} className="w-5"></FontAwesomeIcon>
                    <span>Dark</span>
                </li>
                <li className='flex gap-1 hover:cursor-pointer'  onClick={()=> setTheme('system')}>
                    <FontAwesomeIcon icon={faDesktop} className="w-5"></FontAwesomeIcon>
                    <span>System</span>
                </li>
            </ul>
        </div>
    )
}
