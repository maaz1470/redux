import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./fetures/tasks/tasksSlice";

const store = configureStore({
    reducer:{
        task: tasksSlice
    }
})

export default store;