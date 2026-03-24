import { cookies } from "next/headers";
import SvgProgressRing from "../components/progress/SvgProgressRing";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "@/lib/firebase/admin-app";
import { getTodayCompletedCount, getTodayTotalTasksCount } from "@/util/task";

export default async function Progress() {
    const userId = (await cookies()).get("userId")?.value;
      
    const db = getFirestore(app);

    const tasksRef = db.collection("users").doc(userId).collection("tasks");
    const snapshot = await tasksRef.orderBy("date", "desc").get();
    const tasks = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
    }));

    const totalTasks = getTodayTotalTasksCount(tasks);
    const completedTasks = getTodayCompletedCount(tasks);

    return (
        <div className="min-h-screen border-l border-gray-200 w-full">
            <header className="border-b border-gray-200 py-4 px-8">
                <h1 className="text-3xl font-bold">
                    Productivity Tracking
                </h1>
            </header>

            <section className="m-8">
                {/*
                <div className="border border-gray-200 rounded-lg p-4 w-100 h-80">
                    
                </div>
                */}

                <SvgProgressRing completedTasks={completedTasks} totalTasks={totalTasks} />
            </section>
        </div>
    );
}