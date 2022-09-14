import React, { Component } from 'react';
import './App.css';
import entry from "./images/main.png"
import left_door from "./images/left_door.png"
import right_door from "./images/right_door.png"
import logo from "./images/logo.png"
import menu from "./images/menu.png"
import teams from './images/teams.png'
import afelogo from './images/afe_logo.png'



class App extends Component
 {
  componentDidMount() {
    let left_doors = document.getElementById("leftdoor")
    let right_doors = document.getElementById("rightdoor")
    let entry = document.getElementById("entry")

      window.addEventListener('scroll', function(){
        var value = window.scrollY;
        console.log(value)

        entry.style.transform = `scale(${1+value*0.008})`

        left_doors.style.left = value*-4 + 'px'
        right_doors.style.left = value*4+ 'px'

        left_doors.style.transform = `scale(${1+value*0.01})`
        right_doors.style.transform = `scale(${1+value*0.01})`

        if (value > 250){
          entry.style.display = "none"
          left_doors.style.display = "none"
          right_doors.style.display = "none"
        }
        else{
          entry.style.display = "inline-block"
          left_doors.style.display = "inline-block"
          right_doors.style.display = "inline-block"
        }

      })
  }

  render() {
    return (
    <body>
      <section>
        <img src={entry} id="entry"></img>
        <header id='header'>
          <div></div>
          <ul>
            <li><a href='#' className='active-menu'>HOME</a></li>
            <li><a href='#teams'>TEAM</a></li>
            <li><a href='#'>ROADMAP</a></li>
            <li><a href='#'>FAQ</a></li>
          </ul>
          <div></div>
        </header>
        <img src={afelogo} id="afelogo"></img> 
        <img src={menu} id="menu_screen"></img>

        <img src={right_door} id="rightdoor"></img>
        <img src={left_door} id="leftdoor"></img>
      </section>

      <div className='in-site'>
        <h2 className='menu-title' id='teams'>TEAMS</h2>
        <img src={teams} id="team_screen"></img>
      </div>

      <div className='sec'>
          <h2>About US</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br></p>
      </div>
    </body>
     )
  }
}
export default App;


{/**

    <div className='doors' style={{width:width}}>
      <div className='left-door'>
      <img id='door_lefts' height={width/3.30} src={left_door} style={{marginTop:width/doorsWidth, marginLeft:-width/6.5}}></img>
      </div>
      <div className='right-door'>
      <img id='door_rights' height={width/3.30} src={right_door} style={{marginTop:width/doorsWidth, marginRight:-width/6.5}}></img>
      </div>
    </div>
    
    <div className='main'>
      <img width={width} src={entry}></img>
    </div>

          <div className='entry'>
      <img width={width} src={entry}></img>
      </div>


      <div style={{height:height, width:width}} className='doors'>

        <div className='left-door'>
          <img style={{transform:`translate(${width/55}vh, 1.8vh)`}} height={width/3.33} id='ldoor' src={left_door}></img>
        </div>

        <div className='right-door'>
          <img style={{transform:`translate(${-width/56.8}vh, 1.8vh)`}} height={width/3.33} id='rdoor' src={right_door}></img>
        </div>
      </div>

      <div className='section'>
        <h2>TEST</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
    
        </p>

      </div>

*/}