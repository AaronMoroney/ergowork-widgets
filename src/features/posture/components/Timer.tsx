import {
    Stack, 
    Typography,   
    Button,
    Switch, 
    FormControlLabel,
    styled
} from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export function Timer() {
    let time = '05:00';
    return (
        <>
            <TitleTypography variant="h3">
                Set interval minutes
            </TitleTypography>
            <IntervalStack spacing={2} direction="row">
                <TimeDisplayStack>
                    <TimeTypography>{time}</TimeTypography>
                    <ButtonStack>
                        <TimeAdjustButton variant="outlined"><AddRoundedIcon /></TimeAdjustButton>
                        <TimeAdjustButton variant="outlined"><RemoveRoundedIcon/></TimeAdjustButton>
                    </ButtonStack>
                </TimeDisplayStack>
                <FormControlLabel control={<Switch defaultChecked />} label="Alerts?" />
            </IntervalStack>
        </>
    );
}

export default Timer;
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