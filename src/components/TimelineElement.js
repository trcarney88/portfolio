import React from "react"

const TimelineElement = ({title, body, side, mobile}) => {
    let c;
    if (side==="left"){
        c = "timeline-container left"
    }
    else {
        if (mobile === "True") {
            c = "mobile-timeline-container right"
        }
        else {
            c = "timeline-container right"
        }
    }
    return (
       <div className={c}>
            <div className="content">
                <h2>{title}</h2>
                <p class="markDownText">{body}</p>
            </div>
        </div>
    )
}

export default TimelineElement;