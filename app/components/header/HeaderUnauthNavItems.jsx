"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderUnauthNavItems() {
    const pathName = usePathname();

    return (
        <nav className="flex-1 overflow-y-auto px-4 flex flex-col justify-start items-start text-xl gap-1 w-full mt-4">
            <Link href="/auth/signin" className={`${pathName === "/auth/signin" && `bg-blue-100`} w-[220px] py-2 rounded-lg hover:bg-gray-200`}>
                <span className={`${pathName === "/auth/signin" && `border-l-4 border-teal-500`}`} />
                <span className="ml-2 space-x-2"><span className="bi-box-arrow-in-right" /> <span>Sign In</span></span>
            </Link>

            <Link href="/auth/signup" className={`${pathName === "/auth/signup" && `bg-blue-100`} w-[220px] py-2 rounded-lg hover:bg-gray-200`}>
                <span className={`${pathName === "/auth/signup" && `border-l-4 border-teal-500`}`} />
                <span className="ml-2 space-x-2"><span className="bi-plus-circle" /> <span>Sign Up</span></span>
            </Link>
        </nav>
    );
}