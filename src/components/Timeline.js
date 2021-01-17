import React from "react"
import TimelineElement from "./TimelineElement"
import long from "../content/timeline/long.json"

export default () => {
    const longList = long.items
    const elements = []
    let side = "left"

    for (const [index, value] of longList.entries()){
        elements.push(<TimelineElement title={value.title} body={value.body} side={side}/>)
        side = side === "left" ? "right" : "left"
    }

    return (
        <div className="timeline">
            {elements}
        </div>
    )
}