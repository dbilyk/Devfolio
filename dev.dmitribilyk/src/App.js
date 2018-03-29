import React, { Component } from 'react';
import './App.css';
import BGContainer from "./components/BGcontainer/BGContainer"
import Cloud from "./components/Cloud/Cloud"
class App extends Component {

  
  render() {
    return (
      <div className="App">
      
        <BGContainer />
        
        <div style={{paddingTop:"400px",display:"relative",width:"100%", height:"500px", backgroundColor:"#fffc"}}>tuff stuff </div>
        
      </div>
    );
  }
}

export default App;
