import React from "react"
import "./BGContainer.css"
import data from "../DATA.js"
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import TopBGs from "../TopBGs/TopBGs"
import BottomBGs from "../BottomBGs/BottomBGs"

export default class BGContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor:data.bg.day.bg,
      parallaxDistFromTop:0
    }

    //trigger scroll updates every other time
    this.scrollCounter = 0

    this.animData

    //scroll happens
    window.addEventListener("scroll",(e)=>this.onScroll(e))
    window.addEventListener("resize",(e)=>{
      //when window is resized, we need to reset the height values
      this.animData.parallaxVerticalBounds = [window.screen.height/6,(window.screen.height/6) *4]
      this.animData.appHeight = document.querySelector(".App").clientHeight
      this.animData.scrollPercent = window.pageYOffset /(this.animData.appHeight - window.outerHeight)
      

      this.lerpBGColor()
      this.lerpParallaxHeight()
    })
  }

  componentDidMount(){
    //define data for animatations 
    this.animData = {
      appHeight    : document.querySelector(".App").clientHeight,
      scrollPercent: null,
      parallaxVerticalBounds:[window.screen.height/6*4.5,(window.screen.height/5)]
    }
    //call initial values for children
      this.lerpBGColor()
      this.lerpParallaxHeight()
      
  }


  onScroll(e){
    this.scrollCounter +=1
    if(this.scrollCounter == 2){
      //handle scroll
      let BG = document.querySelector(".BGContainer")
      this.animData.scrollPercent = window.pageYOffset /(this.animData.appHeight - BG.clientHeight)
      
      this.lerpBGColor()
      this.lerpParallaxHeight()
      this.scrollCounter = 0
    }
  }

  lerpNumber(from,to,factor){
    let diff = Math.round(Math.abs(from-to))
    if(from<to){
      return Math.round(from+(diff*factor))
    }
    else if(from>to){
      return Math.round(from-(diff*factor))
    } 
    else{
      return to
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

  lerpParallaxHeight(){
    let topBound = this.animData.parallaxVerticalBounds[0]
    let bottomBound = this.animData.parallaxVerticalBounds[1]
    this.setState({parallaxDistFromTop:this.lerpNumber(topBound,bottomBound,this.animData.scrollPercent)})
  }

  colorToString(colorArr){
    return "rgb("+colorArr[0]+","+colorArr[1]+","+colorArr[2]+")" 
  }

  render() {
    let s = this.state
    return (
      
      <div style={{backgroundColor:this.colorToString(this.state.bgColor)}} className="BGContainer">
        <ParallaxContainer distFromTop={this.state.parallaxDistFromTop}>
          <TopBGs>

          </TopBGs>
          <BottomBGs>

          </BottomBGs>

        </ParallaxContainer>
      </div>
    )
  }

}