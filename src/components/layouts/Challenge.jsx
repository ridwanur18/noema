import ProgressBar from "../ProgressBar";

export default function Challenge() {
    const word = "copacetic";
    const definition = "in excellent order";

    return (
        <section id="challenge">
 
            <h1>{word}</h1>
            <p>{definition}</p>

            <div className="helper">
                <div>
                    {[...Array(definition.length).keys()].map((item, index) => {
                        return (
                            <div key={index}></div>
                        )
                    })}
                </div>

                <input type="text" placeholder="enter the definition" />
            </div>

            <div className="challenge-btns">
                <button className="card-button-secondary">
                    <h6>quit</h6>
                </button>
                <button className="card-button-primary">
                    <h6>i forgot</h6>
                </button>
            </div>

            <ProgressBar />

        </section>
    )
}