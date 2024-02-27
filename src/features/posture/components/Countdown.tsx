import { FC } from 'react';
import { Stack, Typography, Button, Switch, FormControlLabel, styled } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

interface countdownProps {
    time: number,
    setTime: (setTime: number) => void, 
    alert: boolean, 
    setAlert: (setAlert: boolean) => void, 
}

const Countdown: FC<countdownProps> = ({setTime, time, setAlert, alert}) => {
    const handlePlusClick = () => {
        setTime(
            time + 1
        );
    }
    const handleMinusClick = () => {
        setTime(
            time > 1 ? time - 1 : time = 0
        );
    }
    const timerToggle = () => {
        setAlert(!alert);
    }

    return (
        <>
            <TitleTypography variant="h3">
                Set interval minutes
            </TitleTypography>
            <IntervalStack spacing={2} direction="row">
                <TimeDisplayStack>
                    <TimeTypography>{time}</TimeTypography>
                    <ButtonStack>
                        <TimeAdjustButton 
                            variant="outlined"
                            onClick={handlePlusClick}
                        >
                            <AddRoundedIcon />
                        </TimeAdjustButton>
                        <TimeAdjustButton 
                            variant="outlined"
                            onClick={handleMinusClick}
                        >
                            <RemoveRoundedIcon/>
                        </TimeAdjustButton>
                    </ButtonStack>
                </TimeDisplayStack>
                <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label={alert ? 'alerts ✅' : 'alerts ❌'} 
                    onClick={timerToggle}
                />
            </IntervalStack>
        </>
    );
}

export default Countdown;

// Styled components
const TitleTypography = styled(Typography)({
    fontSize: '1rem', 
    fontWeight: 'medium', 
    marginTop: '0.5rem', 
    opacity: '50%'
});

const IntervalStack = styled(Stack)({
    marginBottom: 1, 
    display: 'flex', 
    justifyContent: 'space-between'
});

const TimeDisplayStack = styled(Stack)({
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '50%'
});

const TimeTypography = styled(Typography)({
    fontSize: '3rem', 
    fontWeight: 'medium'
});

const ButtonStack = styled(Stack)({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
});

const TimeAdjustButton = styled(Button)({
    width: '10px', 
    minWidth: '0', 
    height: '30px',
    '&:last-child': {
        marginLeft: '5px'
    }
});