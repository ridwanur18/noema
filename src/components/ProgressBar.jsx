export default function ProgressBar(props) {
    const { text, remainderXP } = props;

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const levelBars = arr.map((item, index) => <div key={index} className="level-bar"></div>);

    const width = 10;

    return (
        <div className="level">
            <div>
                <h4>{text}</h4>
            </div>
            
            {levelBars}

            <div className="xp" style={{ width: `${remainderXP}%` }}></div>
        </div