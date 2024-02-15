
import { useCallback, useMemo } from "react";
import { saveSettings } from "../helpers/postureHelpers";

export function usePosture() {
    
    const onSubmit = useCallback((inputValue: string, activeAlarm: string, volume: number | number[]) => {
        saveSettings(inputValue, activeAlarm, volume);
    }, []); //working

    return useMemo(
    () => ({
     onSubmit
    }),
    [ onSubmit  ]
    );
}