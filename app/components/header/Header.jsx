import Link from "next/link";
import HeaderNavItems from "./HeaderNavItems";
import HeaderSettings from "./HeaderSettings";

export default async function Header() {
    return (
        <header className="flex flex-col h-screen">
            <h1 className="pr-24 pl-4 py-4 text-3xl font-bold shrink-0">
                <Link href="/">Task Spark</Link>
            </h1>

            <HeaderNavItems />
            <HeaderSettings />
        </header>
    );
}