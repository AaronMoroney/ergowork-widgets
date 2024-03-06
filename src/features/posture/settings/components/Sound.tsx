import {  FC } from 'react';
import VolumeUI  from './VolumeUI';
import Alarm from './Alarm';

interface SoundProps  {
    alarm: string; //state
    currentVolume: number | number[];
}

const Sound: FC<SoundProps> = ({ currentVolume, alarm }) => {
    return (
        <>
            <Alarm 
                alarm={alarm}
                currentVolume={currentVolume}
            />
            <VolumeUI
                currentVolume={currentVolume}
            />
        </>
    );
}

export default Sound;