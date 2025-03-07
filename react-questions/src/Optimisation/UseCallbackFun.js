import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallbackFun = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(10);

    const handleIncrement = useCallback(() => {
        console.log("Button clicked!");
        setCounter(counter + 1);
    }, []);

    return (
        <div>
            <h2>Parent Component</h2>
            <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
            <ChildComponent onClick={handleIncrement} />
        </div>
    );
}

export default UseCallbackFun