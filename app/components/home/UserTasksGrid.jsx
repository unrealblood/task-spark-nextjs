import { useSelector } from "react-redux";
import UserTaskItem from "./UserTaskItem";

export default function UserTasksGrid() {
    const tasks = useSelector(state => state.tasks.tasks);
    console.log(tasks);

    return (
        <div>
            {
                tasks.length > 0
                ?
                tasks.map((task, index) => (
                    <UserTaskItem key={index} {...task} />
                ))
                :
                <p className="mt-4 ml-4">No tasks found. Maybe add one!</p>
            }
        </div>
    );
}