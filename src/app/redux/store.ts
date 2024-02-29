import { configureStore } from "@reduxjs/toolkit";
import postureReducer from "../../features/posture/redux/userSettingsSlice";

export const store = configureStore({
    reducer: {
        userSettingsState: postureReducer, 
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 