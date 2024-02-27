import { useRef, useState, FC } from "react";
import {  Button,styled } from "@mui/material";

import { usePosture } from '../hooks/usePosture'
import Sound  from './Sound';
import Countdown  from './Countdown';
import FormInput  from './FormInput'

interface SettingsProps {
    time: number;              
    setTime: (time: number) => void; 
}

const Settings: FC<SettingsProps> = ({time, setTime}) => {
    const [activeAlarm, setActiveAlarm] = useState<string>('./windChime.mp3');
    const [volume, setVolume] = useState<number | number[]>(70);
    const [alert, setAlert] = useState(true);

    const { onSubmit } = usePosture();

    const ref = useRef<HTMLInputElement>(null);
   
    const handleSubmit = () => {
        if(ref.current !== null) {
            onSubmit(ref.current.value, activeAlarm, volume, time, alert);
        }
    } 

    return (
        <>
            <FormInput 
                label="Alert message" 
                ref={ref}
            />
            <Sound 
                setActiveAlarm={setActiveAlarm}
                activeAlarm={activeAlarm}
                volume={volume}
                setVolume={setVolume}
            />
            <Countdown 
                setTime={setTime}
                time={time}
                alert={alert}
                setAlert={setAlert}
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