import { useState, useEffect } from "react";
import {
    Card, 
    Stack, 
    Typography,   
    styled
} from "@mui/material";

import SettingsIcon from '@mui/icons-material/Settings';
import Settings from "./components/Settings";
import Display from "./components/Display";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { fetchStoredSettings } from "./helpers/PostureHelpers";

function PostureWidget() {
    const [toggleSettings, setToggleSettings] = useState(false); 
    const [time, setTime] = useState(5);

    useEffect(() => {
        const storedSettings = fetchStoredSettings();
        if (storedSettings) {
            setTime(storedSettings.time);
        }
    }, [])

    return (
        <>
            <StyledCard sx={{height: toggleSettings ? '50vh' : 'auto'}}>
                <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TitleTypography variant="h1">Posture Timer 💫</TitleTypography>
                    {
                        toggleSettings ? 
                        <AccessAlarmIcon 
                            onClick={()=>setToggleSettings(!toggleSettings)}
                        />
                        : <SettingsIcon
                            onClick={()=>setToggleSettings(!toggleSettings)}
                        />
                    }
                </Stack>
                <ContentStack>
                    {toggleSettings ? 
                    <Settings
                        time={time}
                        setTime={setTime}
                    /> :
                    <Display
                        time={time}
                    />
                    }
                </ContentStack>
            </StyledCard>
        </>
    );
};

// Styled components
const StyledCard = styled(Card)({
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

export default PostureWidget;