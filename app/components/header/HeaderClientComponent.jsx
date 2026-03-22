"use client";

import { useDispatch, useSelector } from "react-redux";
import HeaderAuthNavItems from "./HeaderAuthNavItems";
import HeaderSettings from "./HeaderSettings";
import HeaderUnauthNavItems from "./HeaderUnauthNavItems";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase/app";
import { setIsAuthenticated } from "@/app/redux/slices/authSlice";

export default function HeaderClientComponent() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const firebaseAuth = getAuth(app);
    onAuthStateChanged(firebaseAuth, (user) => {
        if(user) {
            dispatch(setIsAuthenticated(true));
        }
        else {
            dispatch(setIsAuthenticated(false));
        }
    })

    return (
        <>
            {isAuth ? <HeaderAuthNavItems /> : <HeaderUnauthNavItems />}
            {isAuth && <HeaderSettings />}
        </>
    );
}