import { useDispatch, useSelector } from "react-redux";
import UserTaskItem from "./UserTaskItem";
import { getDateLabel } from "@/util/task";
import { setTasks } from "@/app/redux/slices/taskSlice";
import { useEffect } from "react";

export default function UserTasksGrid({tasks}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTasks(tasks));
    }, [tasks]);

    const userTasks = useSelector(state => state.tasks.tasks);

    const groupedTask = userTasks.reduce((accumulator, currentTask) => {
        // 1. Get the label for the current task
        const groupLabel = getDateLabel(currentTask.date);

        // 2. If the label doesn't exist in our accumulator object yet, create an empty array for it
        if (!accumulator[groupLabel]) {
            accumulator[groupLabel] = [];
        }

        // 3. Push the task into the correct array
        accumulator[groupLabel].push(currentTask);

        // 4. Return the accumulator for the next iteration
        return accumulator;
    }, {}); // The {} initializes the accumulator as an empty object

    const groupedTasksArray = Object.keys(groupedTask).map(label => {
        return {
            title: label,
            tasks: groupedTask[label]
        };
    });

    /*
    groupedTasksArray.sort((groupA, groupB) => {
        // Helper function to convert our text labels back into comparable numbers
        const getTimestamp = (label) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize to midnight to ignore hours/minutes

            if (label === "Today") {
                return today.getTime();
            
            } else if (label === "Yesterday") {
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                return yesterday.getTime();
            
            } else {
                // For older date strings like "3/15/2026", new Date() can parse them directly
                return new Date(label).getTime();
            }
        };

        const timeA = getTimestamp(groupA.tasks[0].date);
        const timeB = getTimestamp(groupB.tasks[0].date);

        // Sort descending (b - a) puts the newest/largest timestamps at the top
        return timeB - timeA; 
    });
    */

    return (
        <div className="m-8">
            {
                userTasks.length > 0
                ?
                <div>
                    {groupedTasksArray.map((group, index) => (
                    <div key={index} className="flex justify-start items-start flex-col gap-2 mt-8">
                        <h2 className="text-xl text-gray-500 py-2">{group.title.toUpperCase()}</h2>

                        <div className="flex justify-start items-start flex-col gap-6 w-full">
                            {group.tasks.map((task, index) => (
                                <UserTaskItem key={index} {...task} />
                            ))}
                        </div>
                    </div>
                ))}
                </div>
                :
                <p className="mt-4 ml-4">No tasks found. Maybe add one!</p>
            }
        </div>
    );
}