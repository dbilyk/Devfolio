import React from "react" 

import "./ParallaxContainer.css"
const ParallaxContainer = (props)=>{
    return (
        <div className="ParallaxContainer">
           {[...props.children]} 
        </div>
    )
}

export default ParallaxContainer