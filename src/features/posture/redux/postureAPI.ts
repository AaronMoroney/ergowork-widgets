import { createAsyncThunk } from '@reduxjs/toolkit'
const url = 'http://localhost:3000/userSettings';
// const headers = { 'Content-Type': 'application/json' };
// const error = 'Network response was not OK'

export const fetchSettings = createAsyncThunk(
    'settings/fetchSettings',
    async () => {
        const response = await fetch(url);
        const settings = await response.json();
        console.log(settings);
        return settings;
    }
);