"use client";

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";
import UserTasksGrid from "./UserTasksGrid";

export default function UserTasksProvider({tasks}) {
    return (
        <section>
            <Provider store={store}>
                <UserTasksGrid tasks={tasks} />
            </Provider>
        </section>
    );
}