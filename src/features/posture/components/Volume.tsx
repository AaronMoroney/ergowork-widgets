import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';
import { Slider, Stack, Typography, styled } from "@mui/material";

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

export function Volume() {
    return (
        <>
            <AlertTypography variant="h3"> Alert volume</AlertTypography>
            <VolumeStack spacing={2} direction="row" alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" />
                <VolumeUp />
            </VolumeStack>
        </>
    );
}
