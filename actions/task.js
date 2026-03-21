"use server";

export async function addTaskAction(prevState, formData) {
    const errors = [];

    const title = formData.get("title");
    const description = formData.get("description");
    const priority = formData.get("priority");

    if(!title || title.trim().length === 0) {
        errors.push("Please enter the title of task.");
    }

    if(!description || description.trim().length === 0) {
        errors.push("Please enter the description of task.");
    }

    if(!priority || priority === "") {
        errors.push("Please select the priority of task.");
    }

    if(errors.length === 0) {
        return { success: true, errors, message: "Task added successfully." };
    }

    return { success: false, errors, message: "" };
}