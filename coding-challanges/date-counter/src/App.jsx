import { useState } from "react";

import "./App.css";
import moment from "moment";

function App() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    function handleMinusCount() {
        setCount((value) => value - step);

        setDate((v) => new Date(moment(v).subtract(Math.abs(step), "d")));
    }

    function handlePlusCount() {
        setCount((value) => value + step);

        setDate((v) => new Date(moment(v).add(step, "d")));
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <button onClick={() => setStep((v) => v - 1)}>-</button>
                <p>Step: {step}</p>
                <button onClick={() => setStep((v) => v + 1)}>+</button>
            </div>
            <div style={{ display: "flex" }}>
                <button onClick={handleMinusCount}>-</button>
                <p>Count: {count}</p>
                <button onClick={handlePlusCount}>+</button>
            </div>
            {count > 0 ? (
                <p>
                    {Math.abs(count)} days from today is {date.toLocaleDateString()}
                </p>
            ) : (
                <p>
                    {Math.abs(count)} days ago is {date.toLocaleDateString()}
                </p>
            )}
        </div>
    );
}

export default App;
