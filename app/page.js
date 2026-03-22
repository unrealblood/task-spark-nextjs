import Search from "./components/home/Search";
import UserTasksProvider from "./components/home/UserTasksProvider";

export default async function Home() {
  return (
    <div className="h-screen overflow-y-auto border-l border-gray-200 w-full">
      <header className="flex justify-between items-center border-b border-gray-200 py-4 px-8">
        <h1 className="text-3xl font-bold">
          My Tasks
        </h1>

        <Search />
      </header>

      <UserTasksProvider />
    </div>
  );
}