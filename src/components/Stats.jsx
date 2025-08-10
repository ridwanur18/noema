import ProgressBar from './ProgressBar';
import { calcLevel, calculateAccuracy, calculateNewWords } from '../utils';


export default function Stats(props) {
    const { name, day, attempts } = props;
    //const day = 16;

    const currentLvl = calcLevel(day);
    const flooredLvl = Math.floor(currentLvl);
    const remainderXP = (currentLvl - flooredLvl) * 100;

    return (
        <div className="card stats-card">

            <div className="welcome-text">
                <h6>welcome</h6>
                <h4 className="text-large">
                    {name}
                </h4>
            </div>

            <div className="stats-column">
                <div>
                    <p>streak 🔥</p>
                    <h4>
                        {day - 1}
                    </h4>
                </div>
                <div>
                    <p>words seen</p>
                    <h4>
                        {calculateNewWords(day - 1)}
                    </h4>
           