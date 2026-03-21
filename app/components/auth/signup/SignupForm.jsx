"use client";

import { useState } from "react";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form className="mt-8 flex justify-center items-center gap-4 flex-col">
                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputName">Full Name</label>
                    <input id="inputName" name="name" placeholder="Enter your full name" className="bg-gray-200 p-2 rounded-lg w-full" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputEmail">Email Address</label>
                    <input id="inputEmail" name="email" placeholder="Enter your email address" className="bg-gray-200 p-2 rounded-lg w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputPassword">Password</label>
                    <input id="inputPassword" name="password" placeholder="Enter your password" className="bg-gray-200 p-2 rounded-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <label htmlFor="inputConfirmPassword">Confirm Password</label>
                    <input id="inputConfirmPassword" name="confirmPassword" placeholder="Enter your email address" className="bg-gray-200 p-2 rounded-lg w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="flex justify-start items-start flex-col gap-1 w-full">
                    <button type="submit" className="bg-blue-500 rounded-lg text-white py-2 w-full cursor-pointer">Create Account</button>
                </div>
            </form>
        </div>
    );
}