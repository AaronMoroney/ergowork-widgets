import { configureStore } from "@reduxjs/toolkit";
import postureReducer from "../../features/posture/redux/postureSlice";

export const store = configureStore({
    reducer: {
        postureState: postureReducer, 
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 