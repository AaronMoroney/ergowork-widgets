import { useCallback, useMemo,  useState, useRef } from "react";
import { createUserSettings } from "../helpers/PostureHelpers";
import { useDispatch } from "react-redux";
import { activeAlarm } from "../redux/userSettingsSlice";
import { start, stop } from "../helpers/PostureHelpers";

export function usePosture() {
    const [play, setPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const dispatch = useDispatch();

    const onSetAlarmChoice = useCallback((inputValue: string) => {
        dispatch(activeAlarm(inputValue));     
    }, [dispatch]);
    
    const onPlayToggle = () => {
        play ? stop(audioRef) : start(audioRef);
        setPlay(!play);
    }

    const onSubmit = useCallback((inputValue: string, activeAlarm: string, volume: number | number[], time: number, alert: boolean) => {
        const newUserSettings = createUserSettings(inputValue, activeAlarm, volume, time, alert);
        localStorage.setItem('savedUserSettings', JSON.stringify(newUserSettings)); 
        // dispatch(updateUserSettings(newUserSettings));
    }, []);

    return useMemo(
    () => ({
        onSubmit, 
        onSetAlarmChoice,
        onPlayToggle,
        setPlay, 
        play,
        audioRef,

    }),
    [onSubmit, onSetAlarmChoice, onPlayToggle, play, setPlay, audioRef]
    );
}