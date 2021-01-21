import React from "react"
import TimelineElement from "./TimelineElement"
import long from "../content/timeline/long.json"

export default ({windowWidth}) => {
    const longList = long.items
    let elements = []
    let component;

    if (windowWidth > 750) {
        let side = "left"

        for (const [index, value] of longList.entries()){
            elements.push(<TimelineElement title={value.title} body={value.body} side={side} mobile="False"/>)
            side = side === "left" ? "right" : "left"
        }
    }
    else {
        let side = "right"

        for (const [index, value] of longList.entries()){
            elements.push(<TimelineElement title={value.title} body={value.body} side={side} mobile="True"/>)
        }

    }

    return ( 
        <div className="timeline">
            {elements}
        </div>
    )
}