"use client";

import { addTaskAction } from "@/actions/task";
import { addTask } from "@/app/redux/slices/taskSlice";
import { app } from "@/lib/firebase/app";
import { getAuth } from "firebase/auth";
import { useActionState, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddTaskForm() {
    const [state, formAction, isPending] = useActionState(customAction, {success: false, errors: [], message: ""});

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");

    useEffect(() => {
        if(state.success) {
            dispatch(addTask({
                id: 0,
                title,
                description,
                priority,
                completed: false,
                date: (new Date()).toISOString()
            }));
        }
    }, [state]);

    async function customAction(prevState, formData) {
        const firebaseAuth = getAuth(app);
        let userId = firebaseAuth.currentUser.uid;
        
        formData.append("userId", userId);

        return await addTaskAction(prevState, formData);
    }

    return (
        <div className="bg-slate-100 m-8 w-250 p-8 rounded-lg">
            <form action={formAction}>
                <label htmlFor="inputTitle" />
                <input id="inputTitle" type="text" placeholder="What needs to be done?" className="text-3xl p-4 w-full bg-gray-200 rounded-lg" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />

                <div className="mt-8">
                    <label htmlFor="inputDesc" className="font-bold">Description</label>
                    <textarea id="inputDesc" placeholder="Add details..." className="p-4 w-full mt-2 bg-gray-200 rounded-lg resize-none h-50" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>

                <div className="mt-8 flex justify-center items-center gap-8 w-full">
                    <div className="w-full">
                        <label htmlFor="inputDate" className="font-bold">Date and Time</label><br />
                        <select id="inputDate" className="px-4 py-3 mt-2 w-full bg-gray-200 rounded-lg cursor-not-allowed" name="priority" disabled>
                            <option value="">Current</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="inputPriority" className="font-bold">Priority</label><br />
                        <select id="inputPriority" className="px-4 py-3 mt-2 w-full bg-gray-200 rounded-lg" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="">-- Select --</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8 text-right space-x-8">
                    <button type="button" className="hover:bg-gray-200 px-4 py-3 cursor-pointer rounded-lg">Cancel</button>

                    <button type="submit" className={`${isPending ? `bg-gray-200 text-black` : `bg-blue-500 text-white`} px-4 py-3 cursor-pointer rounded-lg`}>Create Task</button>
                </div>

                {state.errors.length > 0 && state.errors.map((error, index) => (
                    <div key={index} className="text-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                ))}

                <div>
                    {state.message !== "" && <p className="text-green-500 mt-8 text-center">{state.message}</p>}
                </div>
            </form>
        </div>
    );
}