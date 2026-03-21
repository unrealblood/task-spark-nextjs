"use client";

import { useState } from "react";
import HeaderAuthNavItems from "./HeaderAuthNavItems";
import HeaderSettings from "./HeaderSettings";
import HeaderUnauthNavItems from "./HeaderUnauthNavItems";

export default function HeaderClientComponent() {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <>
            {isAuth ? <HeaderAuthNavItems /> : <HeaderUnauthNavItems />}
            {isAuth && <HeaderSettings />}
        </>
    );
}