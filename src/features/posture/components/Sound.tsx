import {  useRef, useState, FC, useEffect } from 'react';
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
import { useDispatch } from 'react-redux'

import VolumeUI  from './VolumeUI';
import { volumeChange } from '../redux/postureSlice';

interface SoundProps  {
    setActiveAlarm: (setActiveAlarm: string) => void;
    activeAlarm: string;
    currentVolume: number | number[];
}

const Sound: FC<SoundProps> = ({ setActiveAlarm, activeAlarm, currentVolume }) => {
    const [play, setPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        //volume adjusted
        if (audioRef.current) {
            const newVolume = Array.isArray( currentVolume ) ? currentVolume[0] : currentVolume / 100;
            audioRef.current.volume = newVolume
        }

        dispatch(volumeChange(currentVolume))
    }, [currentVolume]);

    const handleInputChange = (event: React.SyntheticEvent<Element, Event>) => {
        const input = event.target as HTMLInputElement;
        setPlay(false);
        setActiveAlarm(input.value);
    }

    const start = () => {
        if (audioRef.current !== null) {
            audioRef.current.play();
        }
    }

    const stop = () => {
        if (audioRef.current !== null) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0.0;
        }
    }

    const toggle = () => {
        play ? stop() : start();
        setPlay(!play);
    }

    return (
        <>
            <StackRow>
                <SoundChoiceTypography variant="h3">
                    Choose sound
                </SoundChoiceTypography>
                <audio 
                    ref={audioRef} 
                    src={activeAlarm} 
                    />
                <Button
                    onClick={toggle}
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
                        onChange={handleInputChange}
                        value='./softChime.mp3' 
                        control={<Radio />} 
                        label="Soft Chime" 
                    />
                    <FormControlLabel 
                        onChange={handleInputChange}
                        value='./singingBowl.mp3'
                        control={<Radio />} 
                        label="Singing Bowl"
                    />
                    <FormControlLabel 
                        onChange={handleInputChange}
                        value="./ohm.mp3" 
                        control={<Radio />} 
                        label="Ohm" 
                    /> 
                </RadioGroup>
            </StackRow>
            <VolumeUI
                currentVolume={currentVolume}
            />
        </>
    );
}

// Styled components using MUI's styled API
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

export default Sound