import { useRef, useState, FC } from "react";
import {  Button,styled } from "@mui/material";
import { useSelector  } from 'react-redux';

import { usePosture } from '../hooks/usePosture'
import Sound  from './Sound';
import Countdown  from './Countdown';
import FormInput  from './FormInput'
import type { RootState } from '../../../app/redux/store';

interface SettingsProps {
    time: number;              
}

const Settings: FC<SettingsProps> = ({ time }) => {
    const [activeAlarm, setActiveAlarm] = useState<string>('./windChime.mp3');
    const [alert, setAlert] = useState(true);

    const vol = useSelector((state: RootState) => state.postureState.volume); //state
    
    const { onSubmit } = usePosture();

    const ref = useRef<HTMLInputElement>(null);
   
    const handleSubmit = () => {
        if(ref.current !== null) {
            onSubmit(ref.current.value, activeAlarm, vol, time, alert);
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
                currentVolume={vol} //state
            />
            <Countdown 
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