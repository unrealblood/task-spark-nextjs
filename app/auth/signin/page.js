import SigninForm from "@/app/components/auth/signin/SignInForm";
import Link from "next/link";

export default async function Signup() {
    return (
        <div className="h-screen overflow-y-auto border-l border-gray-200 w-full flex justify-center items-center">
            <div className="bg-slate-100 p-8 rounded-lg w-120">
                <section>
                    <h1 className="text-3xl font-bold text-center">Task Spark</h1>
                    <p className="text-center">Welcome back, please sign in to your account.</p>
                </section>

                <section>
                    <SigninForm />
                </section>

                <section className="border-t border-gray-200 mt-4">
                    <div className="mt-4">
                        <p className="text-center space-x-2">
                            <span>Don't have an account?</span>
                            <Link href="/auth/signup" className="font-bold text-blue-500">Sign up</Link>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}