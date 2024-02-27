import { createSlice } from '@reduxjs/toolkit';

export interface userSettingsState {
    // label: string,
    // activeAlarm: string,
    volume: number | number[], 
    time: number,
    alert: boolean
}

const initialState: userSettingsState = {
    // label: "",
    // activeAlarm: "./windChime.mp3",
    volume: 50, 
    time: 5,
    alert: false
}

export const postureSlice = createSlice({
    name: 'posture',
    initialState,
    reducers: {
            time: (state, action) => {
                state.time = action.payload;
            },
            incrementTime: (state) => {
                state.time += 1
            },
            decrementTime: (state) => {
                if (state.time > 0) {
                    state.time -= 1;
                }
            },
            volumeChange: (state, action) => {
                state.volume = action.payload;
            },
            alertChange: (state, action) => {
                state.alert = action.payload;
            }
        },
    },
)

export const { incrementTime, decrementTime, time, volumeChange, alertChange } = postureSlice.actions
export default postureSlice.reducer
  