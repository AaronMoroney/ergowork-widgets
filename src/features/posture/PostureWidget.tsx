import { useRef, useState } from "react";
import {
    Card, 
    Stack, 
    Typography,   
    Button,
    styled
} from "@mui/material";

import { usePosture } from './hooks/usePosture'
import  Sound  from './components/Sound';
import { Timer } from './components/Timer';
import FormInput  from './components/FormInput'

function PostureWidget() {

    const [activeAlarm, setActiveAlarm] = useState<string>('./windChime.mp3');
    const { onSubmit } = usePosture();
    const ref = useRef<HTMLInputElement>(null);
   
    const handleSubmit = () => {
        if(ref.current !== null) {
            onSubmit(ref.current.value, activeAlarm);
        }
    } 
    
    return (
        <>
            <StyledCard>
                <TitleTypography variant="h1">Posture Timer 💫</TitleTypography>
                <ContentStack>
                    <FormInput 
                        label="Alert message" 
                        ref={ref}
                    />
                    <Sound 
                        setActiveAlarm={setActiveAlarm}
                        activeAlarm={activeAlarm}
                    />
                    <Timer />
                    <StyledButton 
                        variant='contained'
                        onClick={handleSubmit}
                        >
                            Save Settings
                    </StyledButton>
                </ContentStack>
            </StyledCard>
        </>
    );
};

// Styled components
const StyledCard = styled(Card)({
    height: '50vh', 
    padding: '20px', 
    borderRadius: '30px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between'
});

const TitleTypography = styled(Typography)({
    fontSize: '1.75rem', 
    fontWeight: 'medium'
});

const ContentStack = styled(Stack)({
    display: 'flexbox', 
    justifyContent: 'space-evenly', 
    padding: '15px 30px', 
    height: '90%', 
    backgroundColor: '#dad3ff14', 
    borderRadius: '30px'
});

const StyledButton = styled(Button)({
    borderRadius: '30px'
});

export default PostureWidget;
