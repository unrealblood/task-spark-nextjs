"use client";

import { app } from "@/lib/firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignoutComponent() {
    const firebaseAuth = getAuth(app);

    const router = useRouter();

    async function handleSignout() {
        await signOut(firebaseAuth);

        router.push("/auth/signin");
    }

    return (
        <section className="mx-8 mt-8 bg-slate-100 p-8 rounded-lg">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="font-bold text-xl">Profile</h2>
                    <p className="text-gray-500">Change profile related settings.</p>
                </div>

                <div>
                    <button type="button" onClick={handleSignout} className="bg-red-500 text-white px-6 py-3 cursor-pointer rounded-lg">Sign Out</button>
                </div>
            </div>
        </section>
    );
}