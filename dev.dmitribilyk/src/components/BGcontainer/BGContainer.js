import React from "react"
import "./BGContainer.css"
import data from "../DATA.js"
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import Sun from "../Sun/Sun"
import TopBGs from "../TopBGs/TopBGs"
import BottomBGs from "../BottomBGs/BottomBGs"

import SingleTop from "../SingleTop/SingleTop"
import SingleBtm from "../SingleBtm/SingleBtm"

export default class BGContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor:data.bg.day.bg,
      parallaxDistFromTop:0,
      scrollPercent:1,
      L1T: data.bg.day.l1T,
      L2T: data.bg.day.l2T,
      L3T: data.bg.day.l3T,
      L4T: data.bg.day.l4T,
      L5T: data.bg.day.l5T,
      L1B: data.bg.day.l1B,
      L2B: data.bg.day.l2B,
      L3B: data.bg.day.l3B,
      L4B: data.bg.day.l4B,
      L5B: data.bg.day.l5B,

      sunFill:data.bg.day.sun
    }

    //trigger scroll updates every other time
    this.scrollCounter = 0

    this.animData = undefined

    //scroll happens
    window.addEventListener("scroll",(e)=>this.onScroll(e))
    window.addEventListener("resize",(e)=>{
      //when window is resized, we need to reset the height values
      this.animData.parallaxVerticalBounds = [window.screen.height/5,-window.screen.height/5]
      this.animData.appHeight              = document.querySelector(".App").clientHeight
      this.animData.scrollPercent          = window.pageYOffset /(this.animData.appHeight - window.outerHeight)
      

      this.lerpBGColor()
      this.lerpParallaxHeight()
      this.setScrollPercent()
      this.lerpParallaxColors()
      this.lerpSunColor()
    })
  }

  componentDidMount(){
    //define data for animatations 
    this.animData = {
      appHeight    : document.querySelector(".App").clientHeight,
      scrollPercent: 0,
      parallaxVerticalBounds:[window.screen.height/5,-window.screen.height/5],
      parallaxContainerHeight: document.querySelector(".ParallaxContainer").clientHeight
    }
    //call initial values for children
      this.lerpBGColor()
      this.lerpParallaxHeight()
      this.setScrollPercent()
      this.lerpSunColor()
  }


  onScroll(e){
    this.scrollCounter +=1
    //if(this.scrollCounter === 0){
      //handle scroll
      let BG = document.querySelector(".BGContainer")
      this.animData.scrollPercent = window.pageYOffset /(this.animData.appHeight - BG.clientHeight)
      
      this.lerpBGColor()
      this.lerpParallaxHeight()
      this.setScrollPercent()
      this.lerpParallaxColors()
      this.lerpSunColor()
      console.log(this.animData.parallaxContainerHeight)
      this.scrollCounter = 0
    //}
  }

  //generic
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
  //generic helper
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
  
  //for this component
  lerpBGColor(){
    let dayCol   = data.bg.day.bg
    let nightCol = data.bg.night.bg
    this.setState({
      bgColor:this.lerpColor(dayCol, nightCol,this.animData.scrollPercent)
    })
  }

  lerpParallaxColors(){
    this.setState({
      L1T: this.lerpColor(data.bg.day.l1T,data.bg.night.l1T,this.animData.scrollPercent),
      L2T: this.lerpColor(data.bg.day.l2T,data.bg.night.l2T,this.animData.scrollPercent),
      L3T: this.lerpColor(data.bg.day.l3T,data.bg.night.l3T,this.animData.scrollPercent),
      L4T: this.lerpColor(data.bg.day.l4T,data.bg.night.l4T,this.animData.scrollPercent),
      L5T: this.lerpColor(data.bg.day.l5T,data.bg.night.l5T,this.animData.scrollPercent),
      L1B: this.lerpColor(data.bg.day.l1B,data.bg.night.l1B,this.animData.scrollPercent),
      L2B: this.lerpColor(data.bg.day.l2B,data.bg.night.l2B,this.animData.scrollPercent),
      L3B: this.lerpColor(data.bg.day.l3B,data.bg.night.l3B,this.animData.scrollPercent),
      L4B: this.lerpColor(data.bg.day.l4B,data.bg.night.l4B,this.animData.scrollPercent),
      L5B: this.lerpColor(data.bg.day.l5B,data.bg.night.l5B,this.animData.scrollPercent)
    })
  }
  
  lerpSunColor(){
    this.setState({sunFill:this.lerpColor(data.bg.day.sun,data.bg.night.sun,this.animData.scrollPercent)})
  }

  lerpParallaxHeight(){
    let topBound    = this.animData.parallaxVerticalBounds[0]
    let bottomBound = this.animData.parallaxVerticalBounds[1]
    this.setState({parallaxDistFromTop:this.lerpNumber(topBound,bottomBound,this.animData.scrollPercent)})
  }

  setScrollPercent(){
    this.setState({scrollPercent:this.animData.scrollPercent})
  }

  colorToString(colorArr){
    return "rgb("+colorArr[0]+","+colorArr[1]+","+colorArr[2]+")" 
  }

  render() {
    return (
      
      <div style={{backgroundColor:this.colorToString(this.state.bgColor)}} className="BGContainer">
        <ParallaxContainer opacity={this.state.scrollPercent} distFromTop={this.state.parallaxDistFromTop}>
          <Sun VOffset={this.state.scrollPercent * 300} fill={this.colorToString(this.state.sunFill)}/>
        
          <TopBGs>
            
            <SingleTop layer={4} fill={this.colorToString(this.state.L5T)}/>
            <SingleTop layer={3} fill={this.colorToString(this.state.L4T)}/>
            <SingleTop layer={2} fill={this.colorToString(this.state.L3T)}/>
            <SingleTop layer={1} fill={this.colorToString(this.state.L2T)}/>
            <SingleTop layer={0} fill={this.colorToString(this.state.L1T)}/>
            
            
          </TopBGs>
          <BottomBGs>
            <SingleBtm layer={4} VOffset={(1-this.state.scrollPercent)*-120} fill={this.colorToString(this.state.L5B)}/>
            <SingleBtm layer={3} VOffset={(1-this.state.scrollPercent)*-90} fill={this.colorToString(this.state.L4B)}/>
            <SingleBtm layer={2} VOffset={(1-this.state.scrollPercent)*-30} fill={this.colorToString(this.state.L3B)}/>
            <SingleBtm layer={1} VOffset={(1-this.state.scrollPercent)*-15} fill={this.colorToString(this.state.L2B)}/>
            <SingleBtm layer={0} VOffset={(1-this.state.scrollPercent)*-10} fill={this.colorToString(this.state.L1B)}/>
            
          </BottomBGs>

        </ParallaxContainer>
      </div>
    )
  }

}