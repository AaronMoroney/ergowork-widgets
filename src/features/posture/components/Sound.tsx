import { useState } from 'react';
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

import { Volume } from './Volume';

export function Sound() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Tweet"
                name="radio-buttons-group"
            >   
            </RadioGroup>
            <StackRow>
                <SoundChoiceTypography variant="h3">
                    Choose sound
                </SoundChoiceTypography>
                <Button
                    onClick={() => setToggle(!toggle)}
                    startIcon={toggle === true ? <VolumeOffRoundedIcon/> : <PlayCircleOutlineRoundedIcon />}
                />
            </StackRow>
            <StackRow>
                <FormControlLabel value="" control={<Radio />} label="Tweet" />
                <FormControlLabel value="" control={<Radio />} label="Chime" />
                <FormControlLabel value="" control={<Radio />} label="Wave" />
            </StackRow>
            <Volume />
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