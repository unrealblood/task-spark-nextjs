import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        tasks: []
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },

        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        toggleCompleted: (state, action) => {
            const task = state.tasks.find((task) => task.id.toString() === action.payload);
            
            if(task) {
                task.completed = !task.completed;
            }
        }
    }
});

export const { setTasks, addTask, toggleCompleted } = taskSlice.actions;