import React from "react" 
import "./BottomBGs.css"
function BottomBGs(props){
    return (
        <div className="BottomBGContainer">
            <div className="BottomBGs">
            {[...props.children]}
            </div>
        </div>
    )
}

export default BottomBGs