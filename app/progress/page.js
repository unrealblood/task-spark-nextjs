import { cookies } from "next/headers";
import SvgProgressRing from "../components/progress/SvgProgressRing";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "@/lib/firebase/admin-app";
import { getAllTotalCompletedTasks, getTodayCompletedCount, getTodayTotalTasksCount, getTotalPendingTasks } from "@/util/task";

export default async function Progress() {
    const userId = (await cookies()).get("userId")?.value;
      
    const db = getFirestore(app);

    const tasksRef = db.collection("users").doc(userId).collection("tasks");
    const snapshot = await tasksRef.orderBy("date", "desc").get();
    const tasks = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
    }));

    const allTotalTasksCompleted = getAllTotalCompletedTasks(tasks);
    const totalTasksPending = getTotalPendingTasks(tasks);
    const totalTasksToday = getTodayTotalTasksCount(tasks);
    const completedTasks = getTodayCompletedCount(tasks);

    return (
        <div className="min-h-screen border-l border-gray-200 w-full">
            <header className="border-b border-gray-200 py-4 px-8">
                <h1 className="text-3xl font-bold">
                    Productivity Tracking
                </h1>
            </header>

            <section className="m-8 flex justify-start items-start gap-8">
                <SvgProgressRing completedTasks={completedTasks} totalTasks={totalTasksToday} />

                <div className="flex justify-start items-start gap-8">
                    <div className="border border-gray-200 p-4 w-50 h-40 rounded-lg flex justify-center items-center">
                        <div className="w-10 h-10 bg-gray-200 flex justify-center items-center text-3xl rounded-lg m-4">
                            <span className="bi-check" />
                        </div>

                        <header>
                            <h3>Total <br/ >Completed</h3>
                            <p className="text-4xl">{allTotalTasksCompleted}</p>
                        </header>
                    </div>

                    <div className="border border-gray-200 p-4 w-50 h-40 rounded-lg flex justify-center items-center">
                        <div className="w-10 h-10 bg-gray-200 flex justify-center items-center text-2xl rounded-lg m-4">
                            <span className="bi-graph-up" />
                        </div>

                        <header>
                            <h3>Pending</h3>
                            <p className="text-4xl">{totalTasksPending}</p>
                        </header>
                    </div>
                </div>
            </section>
        </div>
    );
}