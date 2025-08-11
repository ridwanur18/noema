import { useState, useEffect, use } from "react";
import { convertMilliseconds, countdownIn24Hours } from "../utils";


export default function Countdown(props) {
    const { handleChangePage, daysWords, datetime, day } = props;

    const targetMilis = datetime || Date.UTC(2024, 8, 10, 12, 0, 0);

    const [remainingMilis, setRemainingMilis] = useState(countdownIn24Hours(targetMilis));

    const timer = convertMilliseconds(remainingMilis);
    console.log('datetime: ', targetMilis);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingMilis(countdownIn24Hours(targetMilis));
        }, 1000);
        return () => clearInterval(interval);
    }, [targetMilis]);

    return (
        <div className="card countdown-card">

            <h1 className="item-header">day {day}</h1>

            <div className="today-container">
                <div>
                    <p>time remaining</p>
                    <h3>{datetime ? `${Math.abs(timer.hours)}h ${Math.abs(timer.minutes)}m ${Math.abs(timer.seconds)}s` : '23h 59m 59s'}</h3>
                </div>
                <div>
                    <p>words for today</p>
                    <h3>{daysWords.length}</h3>
                </div>
            </div>

            <button onClick={() => { handleChangePage(2) }} className="start-task">
                    <h6>start</h6>
            </button>

        </div>
    )
}