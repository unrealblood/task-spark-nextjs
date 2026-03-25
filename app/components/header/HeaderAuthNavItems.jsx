"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderAuthNavItems() {
    const pathName = usePathname();

    return (
        <nav className="flex-1 overflow-y-auto pl-4 flex flex-col justify-start items-start text-xl gap-1 w-full mt-4">
            <Link href="/" className={`${pathName === "/" && `bg-blue-100`} w-[220px] py-2 rounded-lg hover:bg-gray-200`}>
                <span className={`${pathName === "/" && `border-l-4 border-teal-500`}`} />
                <span className="ml-2 space-x-2"><span className="bi-list-task" /> <span>All Tasks</span></span>
            </Link>

            <Link href="/add-task" className={`${pathName === "/add-task" && `bg-blue-100`} w-[220px] py-2 rounded-lg hover:bg-gray-200`}>
                <span className={`${pathName === "/add-task" && `border-l-4 border-teal-500`}`} />
                <span className="ml-2 space-x-2"><span className="bi-plus-circle" /> <span>Add Task</span></span>
            </Link>

            <Link href="/progress" className={`${pathName === "/progress" && `bg-blue-100`} w-[220px] py-2 rounded-lg hover:bg-gray-200`}>
                <span className={`${pathName === "/progress" && `border-l-4 border-teal-500`}`} />
                <span className="ml-2 space-x-2"><span className="bi-graph-up" /> <span>Progress</span></span>
            </Link>

            <Link href="/about" className={`${pathName === "/about" && `bg-blue-100`} w-[220px] py-2 rounded-lg hover:bg-gray-200`}>
                <span className={`${pathName === "/about" && `border-l-4 border-teal-500`}`} />
                <span className="ml-2 space-x-2"><span className="bi-info-circle" /> <span>About</span></span>
            </Link>
        </nav>
    );
}