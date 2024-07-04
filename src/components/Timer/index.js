import React, { useState, useEffect } from "react";

export const Timer = ({startTime, handleEndTimer}) => {

    const [seconds, setSeconds] = useState(startTime);
    const tick = () => {
        if (seconds === 1) {
            handleEndTimer();
            setSeconds(0);
        } else {
            let minusSecond = seconds - 1;
            setSeconds(minusSecond);
        }
    }

    useEffect(() => { 
        if(seconds !== 0) {
            setTimeout(() => tick(), 1000);
        }
        return () => clearTimeout(tick);
	}) 

    return <>{seconds}</>
};
