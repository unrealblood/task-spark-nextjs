"use client";

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";
import HeaderClientComponent from "./HeaderClientComponent";

export default function HeaderProvider() {
    return (
        <Provider store={store}>
            <HeaderClientComponent />
        </Provider>
    );
}