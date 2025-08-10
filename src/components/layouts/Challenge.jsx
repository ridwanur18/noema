import { isEncountered, shuffle } from "../../utils";
import ProgressBar from "../ProgressBar";
import { useState } from 'react';
import DEFINITIONS from '../../utils/VOCAB.json';

export default function Challenge(props) {
    const { day, daysWords, handleChangePage, handleIncrementAttempts, handleCompleteDay, PLAN } = props;

    const [wordIndex, setWordIndex] = useState(0);
    const [inputVal, setInputVal] = useState('');
    const [showDefinition, setShowDefinition] = useState(false);
    const [listToLearn, setListToLearn] = useState([
        ...daysWords,
        ...shuffle(daysWords),
        ...shuffle(daysWords),
        ...shuffle(daysWords)
    ]);

    const word = listToLearn[wordIndex];
    const isNewWord = showDefinition || (!isEncountered(day, word) && wordIndex < daysWords.length);
    const definition = DEFINITIONS[word]; 

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