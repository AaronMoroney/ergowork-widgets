import { FC, useEffect } from 'react';
import {
    RadioGroup, 
    Radio, 
    Stack, 
    Typography,
    FormControlLabel,
    Button,
    styled
} from "@mui/material";

import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { usePosture,  } from '../hooks/usePosture';

interface AlarmProps {
    alarm: string;
    currentVolume: number | number[];
}

const Alarm: FC<AlarmProps>= ({ alarm, currentVolume }) => {
    const { onSetAlarmChoice, onPlayToggle, play, setPlay, audioRef } = usePosture(); 

    //this effect controls the volume played when changed
    useEffect(() => {
        //if volume adjusted
        if (audioRef.current) {
            const newVolume = Array.isArray( currentVolume ) ? currentVolume[0] : currentVolume / 100;
            audioRef.current.volume = newVolume;
        }
    }, [currentVolume]);

    const handleChangeAlarmChoice = (event: React.SyntheticEvent<Element, Event>) => {
        const input = event.target as HTMLInputElement;
        setPlay(false);
        onSetAlarmChoice(input.value);
    }

    return (
        <>
            <StackRow>
                <SoundChoiceTypography variant="h3">
                    Choose sound
                </SoundChoiceTypography>
                <audio 
                    ref={audioRef} 
                    src={alarm} 
                    />
                <Button
                    onClick={onPlayToggle}
                    startIcon={play === true ? <VolumeOffRoundedIcon /> :<PlayCircleOutlineRoundedIcon />  }
                    sx={{minWidth: 0}}
                />
            </StackRow>
            <StackRow>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Tweet"
                    name="radio-buttons-group"
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
                > 
                    <FormControlLabel 
                        onChange={handleChangeAlarmChoice}
                        value='./softChime.mp3' 
             
                        label="Soft Chime" 
                        control={<Radio checked={alarm == './softChime.mp3' } />}
                    />
                    <FormControlLabel 
                        onChange={handleChangeAlarmChoice}
                        value='./singingBowl.mp3'
                        label="Singing Bowl"
                        control={<Radio checked={alarm === './singingBowl.mp3'} />}
                    />
                    <FormControlLabel 
                        onChange={handleChangeAlarmChoice}
                        value="./ohm.mp3" 
             
                        label="Ohm" 
                        control={<Radio checked={alarm === './ohm.mp3'} />}
                    /> 
                </RadioGroup>
            </StackRow>
        </>
    )
}

const SoundChoiceTypography = styled(Typography)({
    fontSize: '1rem', 
    fontWeight: 'medium', 
    marginTop: '0.5rem', 
    opacity: '50%'
});

const StackRow = styled(Stack)({
    display: 'flexbox', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
});

export default Alarm;