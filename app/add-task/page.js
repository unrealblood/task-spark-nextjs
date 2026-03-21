import AddTaskProvider from "../components/add-task/AddTaskProvider";

export default async function AddTask() {
    return (
        <div className="min-h-screen border-l border-gray-200 w-full">
            <header className="border-b border-gray-200 py-4 px-8">
                <h1 className="text-3xl font-bold">
                    Create New Task
                </h1>
            </header>

            <AddTaskProvider />
        </div>
    );
}