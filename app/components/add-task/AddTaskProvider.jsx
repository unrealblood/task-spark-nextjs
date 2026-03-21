"use client";

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";
import AddTaskForm from "./AddTaskForm";

export default function AddTaskProvider() {
    return (
        <section>
            <Provider store={store}>
                <AddTaskForm />
            </Provider>
        </section>
    );
}