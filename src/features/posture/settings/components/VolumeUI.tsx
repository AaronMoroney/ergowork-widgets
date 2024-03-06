import { FC } from 'react';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';
import { Slider, Stack, Typography, styled } from "@mui/material";
import { useDispatch } from 'react-redux';

import { volumeChange } from '../slice';

interface VolumeProps {
    currentVolume: number | number[],
}

const VolumeUI: FC<VolumeProps> = ({ currentVolume }) => {
    const dispatch = useDispatch();

    const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
        dispatch(volumeChange(newValue));
    };
    
    return (
        <>
            <AlertTypography variant="h3"> Alert volume</AlertTypography>
            <VolumeStack spacing={2} direction="row" alignItems="center">
                <VolumeDown />
                <Slider 
                    aria-label="Volume" 
                    defaultValue={currentVolume}
                    value={currentVolume}
                    onChange={handleVolumeChange}
                />
                <VolumeUp />
            </VolumeStack>
        </>
    );
}

// Create styled components
const AlertTypography = styled(Typography)({
    fontSize: '1rem',
    fontWeight: 'medium',
    marginTop: '0.5rem',
    opacity: '50%'
});

const VolumeStack = styled(Stack)({
    marginBottom: 1
});

export default VolumeUI;