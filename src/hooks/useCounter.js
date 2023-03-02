import {useEffect, useState} from "react";
let timerInterval;
export const useCounter = (number) => {
    const [count, setCount] = useState(number);
    const [isFinished, setIsFinished] = useState(false);
    const startTimer = () => {
        timerInterval = setInterval(() => {
            setCount(prevState => --prevState);
        }, 1000);
    }
    useEffect(() => {
        if (count <= 0) {
            clearInterval(timerInterval);
            setIsFinished(true);
        }
    }, [count]) ;
    const resetTimer = ()=>{
        setCount(number) ;
        clearInterval(timerInterval) ;
    }
    let min = Math.floor(count / 60);
    min = min < 10 ? `0${min}` : min;
    let sec = count % 60;
    sec = sec < 10 ? ` 0${sec} ` : sec;
    return {count: `${sec} : ${min}`, startTimer, setCount, isFinished , resetTimer}
}