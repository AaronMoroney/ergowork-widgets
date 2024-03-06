import { FC } from "react";
import  Clock  from '../../features/posture/stopwatch/Clock'
// import  Alert  from '../../features/posture/watch/Alert'

interface DisplayProps {
    time: string,
}

const Display: FC<DisplayProps> = ({time}) => {
    return (
        <>
            <Clock 
                time={time}
            />
            {/* <Alert /> */}
        </>
    )
}

export default Display