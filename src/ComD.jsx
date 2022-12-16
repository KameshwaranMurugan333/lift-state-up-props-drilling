import React from "react";

export const CompD = (props) => {
    return <div>
        <h1>Compo D</h1>
        <p>{props.count}</p>

        <input type={"text"} value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
    </div>
}