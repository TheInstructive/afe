import React, { Component, useEffect, useRef, useState } from 'react'
import './Puzzle.css';
import hamburger from "./images/hamburger.png"
import envoy from "./images/envoy.png"
import madal from "./images/madal.png"
import ground1 from "./images/ground2.png"

import planet from "./images/planet-v.png"





function Puzzle() {
  const [inputValue, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if(inputValue === "moon"){
      alert("doğru cevap: " + inputValue);
    }
    else{
      alert(inputValue)
    }
  }

    return (
      <div className='Puzzle'>
          <img id='planet' src={planet} width="100%"></img>
          <h1 id='logo'>PUZZLE</h1>
          <div className='puzzle-container'>
              <div className='puzzle-info'>

              <h1 style={{color:"red"}}>AFE PUZZLE EVENT</h1>

              </div>


              <div className='puzzle-question'>
                <h1>QUESTION 1</h1>
                <p id='question-one'>What is the Earth's satellite called?</p>
                <p>Please write the answer in the field below.</p>

                <div className='input-container'>
                  <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:'row'}}>
                    <input 
                    onChange={x => setValue(x.target.value)}
                    type="text" 
                    value={inputValue}
                    placeholder='Enter your answer'
                    />
                    <button type='submit'>SUBMIT</button>
                  </form>
                </div>
              </div>

              <img id='burger' src={hamburger} width="100vh"></img>

              <img id='envoy' src={envoy} width="100vh"></img>


          </div> 


      </div>
    )
  
}
export default Puzzle;

