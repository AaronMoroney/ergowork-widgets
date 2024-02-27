import { useRef, useState, FC } from "react";
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
}

const Settings: FC<SettingsProps> = ({ time, setToggleSettings }) => {
    const [activeAlarm, setActiveAlarm] = useState<string>('./windChime.mp3');
    const al = useSelector((state: RootState) => state.postureState.alert); //alert state
    const vol = useSelector((state: RootState) => state.postureState.volume); //vol state

    const ref = useRef<HTMLInputElement>(null);
   
    const { onSubmit } = usePosture();

    const handleSubmit = () => {
        if(ref.current !== null) {
            onSubmit(ref.current.value, activeAlarm, vol, time, al);
            setToggleSettings(false);
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
                currentVolume={vol} 
            />
            <Countdown 
                time={time}
                al={al}
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