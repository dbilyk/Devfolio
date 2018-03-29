import React from "react"
import "./BGContainer.css"
import data from "../DATA.js"
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer"
import Sun from "../Sun/Sun"
import TopBGs from "../TopBGs/TopBGs"
import BottomBGs from "../BottomBGs/BottomBGs"

import SingleTop from "../SingleTop/SingleTop"
import SingleBtm from "../SingleBtm/SingleBtm"
import Cloud from "../Cloud/Cloud"

export default class BGContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: data.bg.day.bg,
      parallaxDistFromTop: 0,
      scrollPercent: 1,
      sunFill: data.bg.day.sun,
    }

    //trigger scroll updates every other time
    this.scrollCounter = 0
    this.mouseCounter = 0

    this.animData = undefined

    // Use our detect's results. passive applied if supported, capture will be false either way.

    //scroll happens
    window.addEventListener("scroll", (e) => this.onScroll(e), false)
    document.addEventListener("mousemove", (e) => this.onMouseMove(e), false)
    window.addEventListener("deviceorientation",(e)=>this.onTilt(e),false)
    window.addEventListener("resize", (e) => this.onResize(e), false)

  }


  componentDidMount() {
    //define data for animatations 
    this.animData = {
      appHeight: document.querySelector(".App").clientHeight,
      appWidth: window.innerWidth,
      scrollPercent: 0,
      parallaxVerticalBounds: [window.screen.height / 5, -window.screen.height / 5],
    }

    this.setState({
      parallaxContainerHeight: document.querySelector(".ParallaxContainer").clientHeight,
      appWidth: window.innerWidth,
      xOffset: 0 
    })
    //call initial values for children
    this.lerpParallaxHeight()
    this.scrollCounter =7
    this.setScrollPercent()
  }

  onResize(e) {
    //when window is resized, we need to reset the height values
    this.animData.parallaxVerticalBounds = [window.screen.height / 5, -window.screen.height / 5]
    this.animData.appHeight = document.querySelector(".App").clientHeight
    this.animData.scrollPercent = window.pageYOffset / (this.animData.appHeight - window.outerHeight)


    this.setState({
        parallaxContainerHeight: document.querySelector(".ParallaxContainer").clientHeight,
        appWidth: window.innerWidth,
        XOffset:0
      })
    this.lerpParallaxHeight()
    this.setScrollPercent()
  }

  onScroll(e) {
    this.scrollCounter += 1

    if (this.scrollCounter === 8) {
      //handle scroll
      let BG = document.querySelector(".BGContainer")
      this.animData.scrollPercent = window.pageYOffset / (this.animData.appHeight - BG.clientHeight)

      this.setScrollPercent()

      this.lerpParallaxHeight()
      this.scrollCounter = 0
    }
  }

  onTilt(e){
    this.mouseCounter += 1
    if (this.mouseCounter === 8) {
      let tilt = e.gamma*1.5
      if(tilt<-25) tilt = -25
      if(tilt>25) tilt = 25
      tilt/=25
      tilt*=this.state.appWidth / 2
      this.setState({ xOffset: tilt})
      this.mouseCounter = 0
    }
  }

  onMouseMove(e) {
    this.mouseCounter += 1
    if (this.mouseCounter === 8) {
      this.setState({ xOffset: (-this.state.appWidth / 2) + e.clientX })
      this.mouseCounter = 0
    }
  }

  //generic
  lerpNumber(from, to, factor) {
    let diff = Math.round(Math.abs(from - to))
    if (from < to) {
      return Math.round(from + (diff * factor))
    }
    else if (from > to) {
      return Math.round(from - (diff * factor))
    }
    else {
      return to
    }
  }
  //generic helper
  lerpColor(from, to, factor) {
    let lerp = from.map((e, i) => {
      let diff = Math.abs(from[i] - to[i])

      if (from[i] < to[i]) {
        return from[i] + Math.round(diff * factor)
      }
      else if (from[i] > to[i]) {
        return from[i] - Math.round(diff * factor)
      }
      else {
        return to[i]
      }
    })
    return lerp

  }



  lerpParallaxHeight() {
    let topBound = this.animData.parallaxVerticalBounds[0]
    let bottomBound = this.animData.parallaxVerticalBounds[1]
    this.setState({ parallaxDistFromTop: this.lerpNumber(topBound, bottomBound, this.animData.scrollPercent) })
  }

  setScrollPercent() {
    this.setState({ scrollPercent: (this.animData.scrollPercent > 1) ? 1 : this.animData.scrollPercent })
  }

  colorToString(colorArr) {
    return "rgb(" + colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ")"
  }

  render() {
    return (

      <div className="BGContainer">
        <div style={{ opacity: this.state.scrollPercent }} className="BGContainerNight"></div>
        
        <ParallaxContainer opacity={this.state.scrollPercent} distFromTop={this.state.parallaxDistFromTop}>
          <Sun XOffset={this.state.xOffset/4} YOffset={-150 + ((this.state.scrollPercent) * (150 + this.state.parallaxContainerHeight / 2))} opacity={this.state.scrollPercent} />
          <TopBGs>

            <SingleTop layer={4} XOffset={this.state.xOffset / 5} YOffset={(1 - this.state.scrollPercent) * (this.state.appWidth / 1000) * -75} opacity={this.state.scrollPercent} />
            <SingleTop layer={3} XOffset={this.state.xOffset / 10} YOffset={(1 - this.state.scrollPercent) * (this.state.appWidth / 1000) * -39} opacity={this.state.scrollPercent} />
            <SingleTop layer={2} XOffset={this.state.xOffset / 15} YOffset={(1 - this.state.scrollPercent) * (this.state.appWidth / 1000) * -5} opacity={this.state.scrollPercent} />
            <SingleTop layer={1} XOffset={this.state.xOffset / 17} YOffset={(1 - this.state.scrollPercent) * (this.state.appWidth / 1000) * -7} opacity={this.state.scrollPercent} />
            <SingleTop layer={0} XOffset={this.state.xOffset / 20} YOffset={0} opacity={this.state.scrollPercent} />


          </TopBGs>
          <BottomBGs>
            <SingleBtm layer={4} XOffset={this.state.xOffset/5} YOffset={(1 - this.state.scrollPercent) * -120} opacity={this.state.scrollPercent} />
            <SingleBtm layer={3} XOffset={this.state.xOffset/10} YOffset={(1 - this.state.scrollPercent) * -90} opacity={this.state.scrollPercent} />
            <SingleBtm layer={2} XOffset={this.state.xOffset/20} YOffset={(1 - this.state.scrollPercent) * -30} opacity={this.state.scrollPercent} />
            <SingleBtm layer={1} XOffset={this.state.xOffset/30} YOffset={(1 - this.state.scrollPercent) * -15} opacity={this.state.scrollPercent} />
            <SingleBtm layer={0} XOffset={this.state.xOffset/40} YOffset={(1 - this.state.scrollPercent) * -10} opacity={this.state.scrollPercent} />

          </BottomBGs>
          <Cloud cloudEnum={1} YOffset={35} scrollPercent={this.state.scrollPercent} hoverSize="sml" animDelay={3} speed={34} size={7}/>
          <Cloud cloudEnum={0} YOffset={45} scrollPercent={this.state.scrollPercent} hoverSize="sml" animDelay={8} speed={25} size={9}/>
          
          <Cloud cloudEnum={0} YOffset={50} scrollPercent={this.state.scrollPercent}  hoverSize="med" animDelay={2} speed={20} size={11}/>
          
          <Cloud cloudEnum={1} YOffset={55} scrollPercent={this.state.scrollPercent}  hoverSize="big" animDelay={1} speed={13} size={15}/>
          <Cloud cloudEnum={0} YOffset={40} scrollPercent={this.state.scrollPercent}  hoverSize="big" animDelay={1} speed={7} size={17}/>
        

        </ParallaxContainer>
      </div>
    )
  }

}