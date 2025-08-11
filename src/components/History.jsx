export default function History(props) {
    const { history } = props;
    const historyKeys = Object.keys(history);

    return (
        <div className="card history-card">

            <h4>history</h4>
            {historyKeys.length === 0 ? (
                <p>you have no attempts! press <b>start</b> to begin</p>
            ) : (
                <div className="history-list">
                    {historyKeys.map((item, index) => {
                        const dateKey = (new Date(item)).toString.split(' ').slice(1, 4).join(' ')
                        return (
                            <div key={index} className="card-button-secondary">
                                <div>
                                    <p>started</p>
                                    <h6>{dateKey}</h6>
                                </div>
                                <div>
                                    <p>streak</p>
                                    <h6>{history[item]}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

        </div>
    )
}