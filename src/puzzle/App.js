import React, { Component, useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Puzzle.css';
import hamburger from "./images/hamburger.png"
import envoy from "./images/envoy.png"

import planet from "./images/planet-v.png"





function Puzzle() {
  const navigate = useNavigate();
  const [inputValue, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue === "")
    {

    }
    else{
      navigate("/puzzle/"+inputValue);
    }

  }

    return (
      <div className='Puzzle'>
          <img id='planet' src={planet} width="100%"></img>
          <h1 id='logo'>PUZZLE</h1>
          <div className='puzzle-container'>
              <div className='puzzle-info'>


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

