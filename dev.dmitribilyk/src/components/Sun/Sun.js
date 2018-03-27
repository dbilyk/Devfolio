import React from "react"
import "../Sun/Sun.css"

function Sun(props) {
    return (
        <div style={{transform:"translate(0,"+props.VOffset+"px)"}} className="Sun">
            <svg viewBox="0 0 123 122" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle id="day-sun" cx="61" cy="61" r="60" fill={props.fill}></circle>
            </svg>
        </div>
    )
}
export default Sun