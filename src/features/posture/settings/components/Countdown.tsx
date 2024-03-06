import { FC } from 'react';
import { Stack, Typography, Button, Switch, FormControlLabel, styled } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import { useDispatch } from 'react-redux'
import { decrementTime, incrementTime, alertChange } from '../slice'
import { formatTimeNumber } from '../../../../widgits/helpers/PostureHelpers';

interface countdownProps {
    time: string,
    alert: boolean, 
}

const Countdown: FC<countdownProps> = ({ time, alert }) => {
    const dispatch = useDispatch();

    const handlePlusClick = () => {
        dispatch(incrementTime(10));
    };

    const handleMinusClick = () => {
        let timeNumber = formatTimeNumber(time);
        if (timeNumber > 1) {
            dispatch(decrementTime(10));
        }
    };
    
    const timerToggle = () => {
        dispatch(alertChange(!alert));
    }

    return (
        <>
            <TitleTypography variant="h3">
                Set interval
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
                    control={<Switch centerRipple checked={alert ? true : false} />} 
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