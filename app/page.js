import Search from "./components/home/Search";
import UserTasksGrid from "./components/home/UserTasksGrid";

export default async function Home() {
  const userTasks = [];

  return (
    <div className="min-h-screen border-l border-gray-200 w-full">
      <header className="flex justify-between items-center border-b border-gray-200 py-4 px-8">
        <h1 className="text-3xl font-bold">
          My Tasks
        </h1>

        <Search />
      </header>

      <section>
        <UserTasksGrid tasks={userTasks} />
      </section>
    </div>
  );
}