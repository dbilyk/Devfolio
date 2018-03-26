import React from "react"
import "./BGContainer.css"
import data from "../DATA.js"
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";

export default class BGContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bgColor:data.bg.day.bg}

    //trigger scroll updates every other time
    this.scrollCounter = 0

    this.animData

    //scroll happens
    window.addEventListener("scroll",(e)=>this.onScroll(e))
  }

  componentDidMount(){
    //define data for animatations 
    this.animData = {
      appHeight    : document.querySelector(".App").clientHeight,
      scrollPercent: null,
    }
  }


  onScroll(e){
    this.scrollCounter +=1
    if(this.scrollCounter == 2){
      //handle scroll
      let BG = document.querySelector(".BGContainer")
      let lastScrollPercent = this.animData.scrollPercent
      this.animData.scrollPercent = window.pageYOffset /(this.animData.appHeight - BG.clientHeight)
      this.lerpBGColor()
      this.scrollCounter = 0
    }
  }

  lerpColor(from,to,factor){
    let lerp = from.map((e,i)=>{
      let diff = Math.abs(from[i]-to[i])

      if(from[i]<to[i]){
        return from[i] + Math.round(diff*factor)
      }
      else if(from[i]>to[i]){
        return from[i] - Math.round(diff*factor)
      }
      else{
        return to[i]
      }
    })
    return lerp

  }

  lerpBGColor(){
    let dayCol = data.bg.day.bg
    let nightCol = data.bg.night.bg
    this.setState({
      bgColor:this.lerpColor(dayCol, nightCol,this.animData.scrollPercent)
    })
  }

  colorToString(colorArr){
    return "rgb("+colorArr[0]+","+colorArr[1]+","+colorArr[2]+")" 
  }

  render() {
    let s = this.state
    return (
      
      <div style={{backgroundColor:this.colorToString(this.state.bgColor)}} className="BGContainer">
        <ParallaxContainer>
          <div className="parallaxTops">
            
          </div>
          <div className="parallaxBottoms">
          stuff
          </div>
        </ParallaxContainer>
      </div>
    )
  }

}