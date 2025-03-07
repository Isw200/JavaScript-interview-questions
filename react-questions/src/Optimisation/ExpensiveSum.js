import React, { useMemo, useState } from "react";

function ExpensiveSum() {
    const [number, setNumber] = useState(10);
    const [counter, setCounter] = useState(0);

    const computeSum = (n) => {
        console.log("Computing sum...");
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    };

    const calculateSum = useMemo(() => computeSum(number), [number])

    return (
        <div>
            <h2>Expensive Computation</h2>
            <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
            <h3>Sum: {calculateSum}</h3>
            <button onClick={() => setCounter(counter + 1)}>Re-render Counter {counter}</button>
        </div>
    );
}

export default ExpensiveSum;
