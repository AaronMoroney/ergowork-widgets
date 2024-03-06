import { useState, useEffect } from "react";
import {
    Card, 
    Stack, 
    Typography,   
    styled
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import type { AppDispatch } from '../../shared/store/store';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '../../shared/store/store';
import { fetchSettings } from "../../shared/api/postureAPI";
import { formatTimeString } from "../helpers/PostureHelpers";
import Settings from "./Settings";
import Display from "./Display";


function PostureWidget() {
    const [toggleSettings, setToggleSettings] = useState(false); 
    const dispatch = useDispatch<AppDispatch>();
   
    useEffect(() => {
        dispatch(fetchSettings());
    }, []); 

    const fetchedSettings = useSelector((state: RootState) => state.userSettingsState.userSettings);
    let timeConvert = formatTimeString(fetchedSettings.time);

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
                        : 
                        <SettingsIcon
                            onClick={()=>setToggleSettings(!toggleSettings)}
                        />
                    }
                </Stack>
                <ContentStack>
                    {toggleSettings ? 
                    <Settings
                        fetchedSettings={fetchedSettings}
                        time={timeConvert}
                        setToggleSettings={setToggleSettings}
                    /> 
                    :
                    <Display
                        time={timeConvert}
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