import { useState } from "react";
import { convertMilliseconds, countdownIn24Hours } from "../utils";


export default function Countdown(props) {
    const { handleChangePage, daysWords, datetime, day } = props;

    const targetMilis = datetime || Date.UTC(2024, 8, 10, 12, 0, 0);

    const [remainingMilis, setRemainingMilis] = useState(countdownIn24Hours(targetMilis));

    const timer = convertMilliseconds(remainingMilis);
    console.log('datetime: ', targetMilis);

    return (
        <div className="card countdown-card">

            <h1 className="item-header">day {1}</h1>

