import { useRef, FC } from "react";
import { Button, styled } from "@mui/material";
import type { RootState } from '../../app/redux/store';
import { useSelector } from 'react-redux';

import { usePosture } from './hooks/usePosture'
import Sound  from './components/Sound';
import Countdown  from './components/Countdown';
import FormInput  from './components/FormInput'

interface SettingsProps {
    time: number;           
    setToggleSettings:(value: boolean)=> void;
    fetchedSettings: {}
}

const Settings: FC<SettingsProps> = ({ time, setToggleSettings }) => {
    const { onSubmit } = usePosture();
    //redux states
    const alarm = useSelector((state: RootState) => state.userSettingsState.userSettings.activeAlarm); //alarm state
    const alert = useSelector((state: RootState) => state.userSettingsState.userSettings.alert); //alert state
    const vol = useSelector((state: RootState) => state.userSettingsState.userSettings.volume); //vol state
    let message = useSelector((state: RootState) => state.userSettingsState.userSettings.alertMessage); //vol state

    const messageRef = useRef<HTMLInputElement>(null);
   
    const handleSubmit = () => {
        if(messageRef.current !== null) {
            //assign message state to the value of the ref
            message = messageRef.current.value;
            onSubmit(message, alarm, vol, time, alert);
            setToggleSettings(false);
        }
    } 

    return (
        <>
            <FormInput 
                label={message} 
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