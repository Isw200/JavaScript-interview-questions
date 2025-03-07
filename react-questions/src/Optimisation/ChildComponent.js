import React from "react";

function ChildComponent({ onClick }) {
    console.log("Child component rendered");

    return <button onClick={onClick}>Increment Counter</button>;
}

export default React.memo(ChildComponent);
