import { useState } from "react";

export default function ScoreKeeper1() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

    function handlePlayer1() {
        const newScores = { ...scores, p1Score: scores.p1Score + 1 };
        setScores(newScores);
    }

    function handlePlayer2() {
        const newScores = { ...scores, p2Score: scores.p2Score + 1 };
        setScores(newScores);
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={handlePlayer1}>+1 Player 1</button>
            <button onClick={handlePlayer2}>+1 Player 2</button>
        </div>
    );
}
