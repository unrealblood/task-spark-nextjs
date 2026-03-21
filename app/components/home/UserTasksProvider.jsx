"use client";

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";
import UserTasksGrid from "./UserTasksGrid";

export default function UserTasksProvider() {
    return (
        <section>
            <Provider store={store}>
                <UserTasksGrid />
            </Provider>
        </section>
    );
}