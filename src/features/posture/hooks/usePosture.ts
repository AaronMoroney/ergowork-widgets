
import { useCallback, useMemo } from "react";
import { saveSettings } from "../helpers/postureHelpers";

export function usePosture() {
    
    const onSubmit = useCallback((inputValue: string) => {
        saveSettings(inputValue);
    }, []) //working

    return useMemo(
    () => ({
     onSubmit
    }),
    [ onSubmit  ]
    );
}