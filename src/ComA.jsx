import React from "react";
import { CompB } from "./ComB";

const CompA = (props) => {
    return <div>
        <h1>Compo A</h1>
        <CompB count={props.count} setCount={props.setCount} />
    </div>
}

export default CompA