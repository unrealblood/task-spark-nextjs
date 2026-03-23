import { cookies } from "next/headers";
import Search from "./components/home/Search";
import UserTasksProvider from "./components/home/UserTasksProvider";
import { app } from "@/lib/firebase/admin-app";
import { getFirestore } from "firebase-admin/firestore";

export default async function Home() {
  const userId = (await cookies()).get("userId")?.value;
  
  const db = getFirestore(app);

  const tasksRef = db.collection("users").doc(userId).collection("tasks");
  const snapshot = await tasksRef.orderBy("date", "desc").get();
  const tasks = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  return (
    <div className="h-screen overflow-y-auto border-l border-gray-200 w-full">
      <header className="flex justify-between items-center border-b border-gray-200 py-4 px-8">
        <h1 className="text-3xl font-bold">
          My Tasks
        </h1>

        <Search />
      </header>

      <UserTasksProvider tasks={tasks} />
    </div>
  );
}