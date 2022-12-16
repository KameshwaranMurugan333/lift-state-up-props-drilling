import React from "react";
import { CompD } from "./ComD";
import { CompE } from "./ComE";

export const CompC = (props) => {

    const [message, setMessage] = React.useState("");

    return <div>
        <h1>Compo C</h1>
        <CompD count={props.count} message={message} setMessage={setMessage} />
        <CompE message={message} count={props.count} setCount={props.setCount}/>
    </div>
}