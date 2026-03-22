"use client";

import { app } from "@/lib/firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reactionMessageType, setReactionMessageType] = useState("error");
    const [reactionMessage, setReactionMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const firebaseAuth = getAuth(app);

    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        if(!email || email.trim().length === 0) {
            setIsLoading(false);

            setReactionMessageType("error");
            setReactionMessage("Please enter your email address.");
            return;
        }

        if(!password || password.trim().length === 0) {
            setIsLoading(false);
            
            setReactionMessageType("error");
            setReactionMessage("Please enter your password.");
            return;
        }

        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            if(user) {
                setIsLoading(false);

                setReactionMessageType("success");
                setReactionMessage("Signed in successfully.");

                router.push("/");
            }
        })
        .catch((error) => {
            setIsLoading(false);
            setReactionMessageType("error");
            setReactionMessage(error.message);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-8 flex justify-center items-center gap-4 flex-col">
                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputEmail">Email Address</label>
                    <input type="email" id="inputEmail" name="email" placeholder="Enter your email address" className="bg-gray-200 p-2 rounded-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" name="password" placeholder="Enter your password" className="bg-gray-200 p-2 rounded-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                {reactionMessage !== ""
                &&
                <div className={`text-center ${reactionMessageType === "error" ? `text-red-500` : `text-green-500`}`}>
                    <p>{reactionMessage}</p>
                </div>}

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <button type="submit" className={`${isLoading ? `bg-gray-200 text-black` : `bg-blue-500 text-white`} rounded-lg py-2 w-full cursor-pointer`}>{isLoading ? "Loading..." : "Sign In"}</button>
                </div>
            </form>
        </div>
    );
}