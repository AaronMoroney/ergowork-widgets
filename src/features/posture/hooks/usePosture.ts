
import { useCallback, useMemo } from "react";
import { saveSettings } from "../helpers/postureHelpers";

export function usePosture() {
    
    const onSubmit = useCallback((inputValue: string, activeAlarm: string) => {
        saveSettings(inputValue, activeAlarm);
    }, []); //working

    return useMemo(
    () => ({
     onSubmit
    }),
    [ onSubmit  ]
    );
}