import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserSettingsType } from '../types/UserSettingsType';

const url = 'http://localhost:3000/userSettings';
const headers = { 'Content-Type': 'application/json' };
const error = 'Network response was not OK'

export const fetchSettings = createAsyncThunk(
    'settings/fetchSettings',
    async () => {
        const response = await fetch(url);
        const settings = await response.json();
        return settings;
    }
);

export const updateSettings = createAsyncThunk(
    'settings/updateSettings', 
    async(settings: UserSettingsType) => {
        const response = await fetch(`${url}/postureSettings`, {
            method: 'PATCH', 
            headers: headers,
            body: JSON.stringify(settings),
        });
        if(!response.ok) {
            throw new Error(error);
        }
        return await response.json();
    }
)