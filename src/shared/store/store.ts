import { configureStore } from "@reduxjs/toolkit";
import postureReducer from "../../features/posture/settings/slice";

export const store = configureStore({
    reducer: {
        userSettingsState: postureReducer, 
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 