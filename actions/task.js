"use server";

import { app } from "@/lib/firebase/admin-app";
import { getFirestore } from "firebase-admin/firestore";
import { revalidatePath } from "next/cache";

export async function addTaskAction(prevState, formData) {
    const errors = [];

    const title = formData.get("title");
    const description = formData.get("description");
    const priority = formData.get("priority");
    const userId = formData.get("userId");

    if(!title || title.trim().length === 0) {
        errors.push("Please enter the title of task.");
    }

    if(!description || description.trim().length === 0) {
        errors.push("Please enter the description of task.");
    }

    if(!priority || priority === "") {
        errors.push("Please select the priority of task.");
    }

    if(!userId || userId.trim().length === 0) {
        errors.push("userId not found.");
    }

    if(errors.length === 0) {
        const db = getFirestore(app);

        const newTaskData = {
            title,
            description,
            priority,
            completed: false,
            date: (new Date()).toISOString()
        };

        const tasksRef = db.collection("users").doc(userId).collection("tasks");
        await tasksRef.add(newTaskData);

        revalidatePath("/");
        return { success: true, errors, message: "Task added successfully." };
    }

    return { success: false, errors, message: "" };
}