import Link from "next/link";
import HeaderProvider from "./HeaderProvider";
import Image from "next/image";

export default async function Header() {
    return (
        <header className="flex flex-col h-screen">
            <h1 className="pl-4 py-4 text-3xl font-bold shrink-0">
                <Link href="/" className="flex justify-start items-center">
                    <div className="w-auto h-auto">
                        <Image src="https://res.cloudinary.com/diehhord1/image/upload/v1774337831/task_spark_MAUI_app_icon_lsk0kt.png" width={50} height={50} priority alt="task-spark-logo" />
                    </div>
                    <h1>Task Spark</h1>
                </Link>
            </h1>
            
            <HeaderProvider />
        </header>
    );
}