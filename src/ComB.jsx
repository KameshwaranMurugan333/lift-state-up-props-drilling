import React from "react";
import { CompC } from "./ComC";

export const CompB = (props) => {
    return <div>
        <h1>Compo B</h1>
        <CompC count={props.count} setCount={props.setCount} />
    </div>
}