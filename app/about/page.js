import Link from "next/link";

export default async function Progress() {
    return (
        <div className="min-h-screen border-l border-gray-200 w-full">
            <header className="border-b border-gray-200 py-4 px-8">
                <h1 className="text-3xl font-bold">
                    About
                </h1>
            </header>

            <section className="ml-8 mt-8">
                <h2>Developed by: <Link href="https://shubhamsinghog.vercel.app" className="underline font-bold">Shubham Singh</Link></h2>
            </section>
        </div>
    );
}