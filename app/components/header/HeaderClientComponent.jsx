"use client";

import { useDispatch, useSelector } from "react-redux";
import HeaderAuthNavItems from "./HeaderAuthNavItems";
import HeaderSettings from "./HeaderSettings";
import HeaderUnauthNavItems from "./HeaderUnauthNavItems";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase/app";
import { setIsAuthenticated } from "@/app/redux/slices/authSlice";
import { useEffect, useState } from "react";

export default function HeaderClientComponent() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const firebaseAuth = getAuth(app);

    const [isMounted, setIsMounted] = useState(false);

    onAuthStateChanged(firebaseAuth, (user) => {
        if(user) {
            dispatch(setIsAuthenticated(true));
        }
        else {
            dispatch(setIsAuthenticated(false));
        }
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return (
            <p className="mt-8 p-4">Loading...</p>
        );
    }

    return (
        <>
            {isAuth ? <HeaderAuthNavItems /> : <HeaderUnauthNavItems />}
            {isAuth && <HeaderSettings />}
        </>
    );
}