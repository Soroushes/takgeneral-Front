import {useState} from "react";

export const useCounter = (number) => {
    const [count, setCount] = useState(number);
    const startTimer = () => {
        const timerInterval = setInterval(() => {
            if (count <= 0) return clearInterval(timerInterval);
            setCount(prevState => --prevState);
        }, 1000);
    }
    let min = Math.floor(count / 60);
    min = min < 10 ? `0${min}` : min;
    let sec = count % 60;
    sec = sec < 10 ? ` 0${sec} ` : sec;
    return {count: `${min} : ${sec} `, startTimer}
}