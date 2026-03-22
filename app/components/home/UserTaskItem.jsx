import { toggleCompleted } from "@/app/redux/slices/taskSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

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

    function handleTaskCompletedToggle() {
        setTaskCompleted(!taskCompleted);

        dispatch(toggleCompleted(id));
    }

    return (
        <article className={`border border-gray-200 p-4 rounded-lg flex justify-start items-start gap-4 ${completed && `bg-slate-100`} w-full`}>
            <div className="p-2">
                <input type="checkbox" className="scale-180" onChange={handleTaskCompletedToggle} checked={taskCompleted} />
            </div>

            <div className="flex justify-between items-start w-full">
                <div>
                    <header>
                        <h2 className={`text-xl font-bold ${completed && `line-through text-gray-500`}`}>{title}</h2>
                    </header>

                    <p className={completed ? `text-gray-500` : ``}>{description}</p>
                </div>

                <div className={`border p-3 rounded-lg text-xs ${priorityColorScheme}`}>{priority}</div>
            </div>

            <button type="button" className="bg-red-500/10 text-red-500 p-2 rounded-lg cursor-pointer">
                <span className="text-xl bi-trash" />
            </button>
        </article>
    );
}