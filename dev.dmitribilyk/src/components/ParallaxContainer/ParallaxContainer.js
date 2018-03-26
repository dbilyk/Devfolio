import React from "react" 

import "./ParallaxContainer.css"
const ParallaxContainer = (props)=>{
    return (
        <div style={{transform:"translate(0,"+props.distFromTop+"px)"}} className="ParallaxContainer">
           {[...props.children]} 
        </div>
    )
}

export default ParallaxContainer