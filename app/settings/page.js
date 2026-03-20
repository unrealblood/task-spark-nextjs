import Link from "next/link";

export default async function Progress() {
    return (
        <div className="min-h-screen border-l border-gray-200 w-full">
            <header className="border-b border-gray-200 py-4 px-8">
                <h1 className="text-3xl font-bold">
                    Application Settings
                </h1>
            </header>

            <section className="mx-8 mt-8 bg-slate-100 p-8 rounded-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-xl">Appearance</h2>
                        <p className="text-gray-500">Change the appearance of the application.</p>
                    </div>

                    <div>
                        <select className="bg-gray-200 px-4 py-3 rounded-lg w-40">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    );
}