import { createSlice } from '@reduxjs/toolkit';
import { fetchSettings } from './postureAPI';
import { UserSettingsType } from '../../../types/UserSettingsType';

export interface userSettingsState {
    userSettings: UserSettingsType,
}

const initialState: userSettingsState = {
    //placeholoder values, replaced by vals from DB fetch
    userSettings : {
        alertMessage: "",
        activeAlarm: "",
        volume: 0, 
        time: 0,
        alert: false,  
    }
};

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {
        time: (state) => {
            state.userSettings.time
        },
        incrementTime: (state) => {
            state.userSettings.time += 1
        },
        decrementTime: (state) => {
            if (state.userSettings.time > 0) {
                state.userSettings.time -= 1;
            }
        },
        volumeChange: (state, action) => {
            state.userSettings.volume = action.payload;
        },
        alertChange: (state, action) => {
            state.userSettings.alert = action.payload;
        }, 
        activeAlarm: (state, action) => {
            state.userSettings.activeAlarm = action.payload; 
        },
        alertMessage: (state, action) => {
            state.userSettings.alertMessage = action.payload;
        }, 
    },
    extraReducers: (builder) => {
        //FETCH
        builder.addCase(fetchSettings.fulfilled, (state, action) => {
            state.userSettings = action.payload;
        });
    },
});
   
export const { incrementTime, decrementTime, time, volumeChange, alertChange, activeAlarm, alertMessage } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;