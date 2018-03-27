import React from "react" 
import "./TopBGs.css"

function TopBGs(props){
    return (
        <div className="TopBGContainer">
            <div className="TopBGs">
            {[...props.children]}
            </div>
        </div>
    )
}
export default TopBGs