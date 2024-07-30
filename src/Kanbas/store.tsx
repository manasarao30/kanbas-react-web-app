import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer"; // Import the assignments reducer

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;