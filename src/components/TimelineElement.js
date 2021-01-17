import React from "react"

export default ({title, body, side}) => {
    let c;
    if (side==="left"){
        c = "timeline-container left"
    }
    else {
        c = "timeline-container right"
    }
    return (
       <div className={c}>
            <div className="content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}