import { useCallback, useMemo,  useState } from "react";
import { fetchStoredSettings } from "../helpers/PostureHelpers";

interface UserSettings {
    label: string;
    activeAlarm: string;
    volume: number;
    time: number;
    alert: boolean;
}

export function usePosture() {
    const [userSettings, setUserSettings] = useState<UserSettings>(fetchStoredSettings());
    //set the default value for user settings

    const onSubmit = useCallback((inputValue: string, activeAlarm: string, volume: number | number[], time: number, alert: boolean) => {
        const newUserSettings = {
            label: inputValue,
            activeAlarm: activeAlarm,
            volume: Array.isArray(volume) ? volume[0] : volume, 
            time: time,
            alert: alert
        };
        localStorage.setItem('savedUserSettings', JSON.stringify(newUserSettings)); 
        setUserSettings(newUserSettings);
    }, []); 
       
    return useMemo(
    () => ({
        onSubmit, 
        userSettings, 
        setUserSettings
    }),
    [onSubmit, userSettings, setUserSettings]
    );
}