import { toggleCompleted } from "@/app/redux/slices/taskSlice";
import { app } from "@/lib/firebase/app";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { refreshHomePage } from "@/actions/task";

export default function UserTaskItem({id, completed, title, description, priority}) {
    let priorityColorScheme = "";
    switch (priority) {
        case "Low":
            priorityColorScheme = "bg-blue-500/5 text-blue-500 border-blue-500";
            break;
    
        case "Medium":
            priorityColorScheme = "bg-green-500/5 text-green-500 border-green-500";
            break;

        case "High":
            priorityColorScheme = "bg-red-500/5 text-red-500 border-red-500";
            break;

        default:
            priorityColorScheme = "bg-green-500/5 text-green-500 border-green-500";
            break;
    };

    const dispatch = useDispatch();

    const [taskCompleted, setTaskCompleted] = useState(completed);

    async function handleTaskCompletedToggle() {
        setTaskCompleted(!taskCompleted);

        dispatch(toggleCompleted(id));

        const firebaseApp = app;
        const firebaseAuth = getAuth(firebaseApp)
        const db = getFirestore(firebaseApp);

        const userId = firebaseAuth.currentUser.uid;

        // 1. Create a reference to the exact document in Firestore
        // Path: users -> [userId] -> tasks -> [id]
        const taskDocRef = doc(db, "users", userId, "tasks", id);

        // 2. Update the document in Firestore
        await updateDoc(taskDocRef, {
            completed: !taskCompleted
        });
    }

    return (
        <article className={`border border-gray-200 p-6 rounded-lg flex justify-start items-start gap-4 ${completed && `bg-slate-100`} w-full`}>
            <div className="p-2">
                <input type="checkbox" className="scale-180" onChange={handleTaskCompletedToggle} checked={completed} />
            </div>

            <div className="flex justify-between items-start w-full">
                <div>
                    <header>
                        <h2 className={`text-xl font-bold ${completed && `line-through text-gray-500`}`}>{title}</h2>
                    </header>

                    <p className={completed ? `text-gray-500` : ``}>{description}</p>
                </div>

                <div className={`border p-2 rounded-lg text-xs ${priorityColorScheme}`}>{priority}</div>
            </div>
        </article>
    );
}