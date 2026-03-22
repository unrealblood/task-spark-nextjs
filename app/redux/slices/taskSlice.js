import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        tasks: []
    },
    reducers: {
        setTasks: (state = initialState, action) => {
            state.tasks = action.payload;
        },

        addTask: (state = initialState, action) => {
            state.tasks.push(action.payload);
        },

        toggleCompleted: (state = initialState, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            
            if(task) {
                task.completed = !task.completed;
            }
        }
    }
});

export const { setTasks, addTask, deleteTask, toggleCompleted } = taskSlice.actions;