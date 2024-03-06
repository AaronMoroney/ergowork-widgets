import { useRef, FC } from "react";
import { Button, styled } from "@mui/material";
import type { RootState } from '../../shared/store/store';
import { useSelector } from 'react-redux';

import { usePosture } from '../hooks/usePosture'
import { formatTimeNumber } from "../helpers/PostureHelpers";
import Sound  from '../../features/posture/settings/components/Sound';
import Countdown  from '../../features/posture/settings/components/Timer';
import FormInput  from '../../features/posture/settings/components/FormInput'

interface SettingsProps {
    time: string;           
    setToggleSettings:(value: boolean) => void;
    fetchedSettings: {}
}

const Settings: FC<SettingsProps> = ({ time, setToggleSettings }) => {
    const { onSubmit } = usePosture();
    //redux states
    const alarm = useSelector((state: RootState) => state.userSettingsState.userSettings.activeAlarm); //alarm state
    const alert = useSelector((state: RootState) => state.userSettingsState.userSettings.alert); //alert state
    const vol = useSelector((state: RootState) => state.userSettingsState.userSettings.volume); //vol state
    const message = useSelector((state: RootState) => state.userSettingsState.userSettings.alertMessage); //vol state

    const messageRef = useRef(null);
    
    let newUserSettings = {
        id: "posture",
        alertMessage: message, 
        activeAlarm: alarm,
        volume: vol,
        time: formatTimeNumber(time), //slice expects time as number
        alert: alert
    }

    const handleSubmit = () => {
        onSubmit(newUserSettings);
        setToggleSettings(false);
    } 

    return (
        <>
            <FormInput 
                message={message} 
                ref={messageRef}
            />
            <Sound 
                alarm={alarm}
                currentVolume={vol} 
            />
            <Countdown 
                time={time}
                alert={alert}
            />
            <StyledButton 
                variant='contained'
                onClick={handleSubmit}
            >
                Save Settings
            </StyledButton>
        </>
    )
}

export default Settings

const StyledButton = styled(Button)({
    borderRadius: '30px'
});