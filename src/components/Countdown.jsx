export default function Countdown() {
    return (
        <div className="card countdown-card">

            <h1 className="item-header">day {1}</h1>

            <div className="today-container">
                <div>
                    <p>time remaining</p>
                    <h3>13h 23m 59s</h3>
                </div>
                <div>
                    <p>words for today</p>
                    <h3>16</h3>
                </div>
            </div>

            <button className="start-task">
                    <h6>start</h6>
            </button>

        </div>
    )
}