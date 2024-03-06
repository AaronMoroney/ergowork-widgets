import { FC } from "react";
import { Button, styled, Stack, Typography } from "@mui/material";

interface ClockProps {
    time: string, 
}

const Clock: FC<ClockProps> = ({time}) => {
    //countdown logic
    return (
        <>
            <TimerTypography>{time}</TimerTypography>
            <StackRow>
                <StyledButton>Start</StyledButton>
                <StyledButton>Reset</StyledButton>
            </StackRow>
        </>
    )
}

const StyledButton = styled(Button)({
    borderRadius: '30px'
});

const StackRow = styled(Stack)({
    display: 'flexbox', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
});

const TimerTypography = styled(Typography)({
    fontSize: '100px'
})

export default Clock