"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderSettings() {
    const pathName = usePathname();

    return (
        <Link href="/settings" className={`${pathName === "/settings" && `bg-blue-100`} w-[220px] mx-4 mb-4 p-2 text-xl rounded-lg hover:bg-gray-200`}>
            <span className={`${pathName === "/settings" && `border-l-4 border-teal-500`}`} />
            <span className="ml-2">Settings</span>
        </Link>
    );
}