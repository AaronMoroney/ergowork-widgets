import { useCallback, useMemo,  useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../../app/redux/store'; // import your store's type

import { activeAlarm } from "../redux/userSettingsSlice";
import { start, stop } from "../helpers/PostureHelpers";
import { updateSettings } from "../redux/postureAPI";
import { UserSettingsType } from "../../../types/UserSettingsType";

export function usePosture() {
    const [play, setPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    //react based FNS
    const onPlayToggle = () => {
        play ? stop(audioRef) : start(audioRef);
        setPlay(!play);
    }

    //redux based FNS
    const dispatch = useDispatch<AppDispatch>();

    const onSetAlarmChoice = useCallback((inputValue: string) => {
        dispatch(activeAlarm(inputValue));     
    }, [dispatch]);

    const onSubmit = useCallback((userSettings: UserSettingsType) => {
        dispatch(updateSettings(userSettings));
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