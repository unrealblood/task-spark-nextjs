"use client";

import { app } from "@/lib/firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

export default function SignupForm() {
    //const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const firebaseAuth = getAuth(app);

    async function handleSubmit(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            if(user) {
                console.log("User successfully signed up. You can now login.");
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-8 flex justify-center items-center gap-4 flex-col">
                {/*
                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputName">Full Name</label>
                    <input type="text" id="inputName" name="name" placeholder="Enter your full name" className="bg-gray-200 p-2 rounded-lg w-full" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                */}

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputEmail">Email Address</label>
                    <input type="email" id="inputEmail" name="email" placeholder="Enter your email address" className="bg-gray-200 p-2 rounded-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" name="password" placeholder="Enter your password" className="bg-gray-200 p-2 rounded-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputConfirmPassword">Confirm Password</label>
                    <input type="password" id="inputConfirmPassword" name="confirmPassword" placeholder="Enter your email address" className="bg-gray-200 p-2 rounded-lg w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <button type="submit" className="bg-blue-500 rounded-lg text-white py-2 w-full cursor-pointer">Create Account</button>
                </div>
            </form>
        </div>
    );
}