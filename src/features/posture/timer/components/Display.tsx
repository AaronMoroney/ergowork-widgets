import { FC } from "react";
import { Button, styled, Stack, Typography } from "@mui/material";

interface displayProps {
    time: number,
}

const Display: FC<displayProps> = ({time}) => {
    return (
        <>
            <TimerTypography>{time}</TimerTypography>
            <StackRow>
                <StyledButton>Start</StyledButton>
                <StyledButton>Stop</StyledButton>
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

export default Display