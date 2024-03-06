import { createSlice } from '@reduxjs/toolkit';
import { fetchSettings, updateSettings } from '../../../shared/api/postureAPI';
import { UserSettingsType } from '../../../shared/types/UserSettingsType';

export interface userSettingsState {
    userSettings: UserSettingsType,
}

const initialState: userSettingsState = {
    //placeholoder values, will be replaced by vals from DB fetch
    userSettings: {
        id: "",
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
        incrementTime: (state, action ) => {
            state.userSettings.time += action.payload;
        },
        decrementTime: (state, action) => {
            state.userSettings.time -= action.payload;
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
            state.userSettings = action.payload[0];
        });
        //PATCH
        builder.addCase(updateSettings.fulfilled, (state, action)=> {
            state.userSettings = action.payload;
        })
    },
});
   
export const { incrementTime, decrementTime, volumeChange, alertChange, activeAlarm, alertMessage } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;