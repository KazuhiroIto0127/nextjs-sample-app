import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react';

const LaboLink = ({ id, emoji, title }: { id: string, emoji: string, title: string }) => {
    return (
        <Link href={`/labo/${id}`}>
            <div className="rounded-md bg-white shadow-lg shadow-indigo-500/40 p-3  hover:scale-125 transition ease-in-out">
                <div className="rounded-md h-32 bg-gradient-to-r from-green-400 to-blue-500 text-clip overflow-hidden tracking-widest text-center">
                    <span className="text-2xl">{emoji.repeat(60)}</span>
                </div>
                {title}
            </div>
        </Link>
    )
};

export default LaboLink;
