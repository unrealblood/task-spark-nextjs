import { useSelector } from "react-redux";
import UserTaskItem from "./UserTaskItem";

export default function UserTasksGrid() {
    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <div className="m-8">
            {
                tasks.length > 0
                ?
                <div className="flex justify-start items-start flex-col gap-6">
                    {tasks.map((task, index) => (
                        <UserTaskItem key={index} {...task} />
                    ))}
                </div>
                :
                <p className="mt-4 ml-4">No tasks found. Maybe add one!</p>
            }
        </div>
    );
}