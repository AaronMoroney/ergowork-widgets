import { useCallback, useMemo,  useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../shared/store/store';

import { activeAlarm } from "../../features/posture/settings/slice";
import { start, stop } from "../helpers/PostureHelpers";
import { updateSettings } from "../../shared/api/postureAPI";
import { UserSettingsType } from "../../shared/types/UserSettingsType";

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