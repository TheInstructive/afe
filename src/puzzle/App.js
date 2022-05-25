import React, { Component, useEffect, useRef } from 'react'
import './Puzzle.css';
import hamburger from "./images/hamburger.png"
import envoy from "./images/envoy.png"
import ground from "./images/ground.png"
import ground1 from "./images/ground2.png"

import planet from "./images/planet-v.png"


function Puzzle() {
    return (
      <div className='Puzzle'>
          <img id='planet' src={planet} width="100%"></img>
          <h1 id='logo'>PUZZLE</h1>
          <div className='puzzle-container'>
              <div className='puzzle-info'>


              </div>


              <div className='puzzle-question'>
                <h1>QUESTION 1</h1>
                <p>Please write the answer in the field below.</p>

                <div className='input-container'>
                <input placeholder='Enter your answer'></input>
                <button>SUBMIT</button>
                </div>
              </div>

              <img id='burger' src={hamburger} width="100vh"></img>

              <img id='envoy' src={envoy} width="100vh"></img>


          </div> 


      </div>
    )
  
}
export default Puzzle;

