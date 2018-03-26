import React from "react"
import "./BGContainer.css"
import data from "../DATA.js"
class Anim {
  constructor() {
    this.data = data

    window.addEventListener("scroll",this.onScroll)
  }

  onScroll(){

  }


}

export default class BGContainer extends React.Component {

  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div className="BGContainer">

      </div>
    )
  }

}