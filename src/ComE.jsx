import React from "react";

export const CompE = (props) => {
    return <div>
        <h1>Compo E</h1>
        <p>My Message: {props.message}</p>
        <p>Count: {props.count}</p>
        <button onClick={(e) => props.setCount(props.count + 1)}>Increment</button>
    </div>
}