"use client";

import { useSelector } from "react-redux";
import HeaderAuthNavItems from "./HeaderAuthNavItems";
import HeaderSettings from "./HeaderSettings";
import HeaderUnauthNavItems from "./HeaderUnauthNavItems";

export default function HeaderClientComponent() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <>
            {isAuth ? <HeaderAuthNavItems /> : <HeaderUnauthNavItems />}
            {isAuth && <HeaderSettings />}
        </>
    );
}