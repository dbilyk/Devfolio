import React from "react" 
import "./ParallaxContainer.css"

const ParallaxContainer = (props)=>{
    return (
        <div style={{transform:"translate(0,"+props.distFromTop+"px)"}} className="ParallaxContainer">
        <div style= {{opacity:1-props.opacity}} className="BGDayGradient"></div>
        <div style={{opacity:props.opacity}} className="BGNightGradient"></div>
           {[...props.children]} 
        </div>
    )
}

export default ParallaxContainer