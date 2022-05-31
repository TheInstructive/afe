import React, { useState } from 'react'
import '../Puzzle.css';

export default function App() {
  const [inputValue, setValue] = useState("");

  return (
    <div>
        <div className='puzzle-question'>
                <h1>QUESTION 2</h1>
                <p id='question-one'>Which planet is called Red Planet?</p>
                <p>Please write the answer in the field below.</p>

                <div className='input-container'>
                    <input 
                    style={{borderTopRightRadius:'100px', borderBottomRightRadius:'100px'}}
                    onChange={x => setValue(x.target.value)}
                    type="text" 
                    value={inputValue}
                    placeholder='Enter your answer'
                    />
                </div>
                <br></br>
                {inputValue &&
                <img src={"/"+inputValue+".png"} 
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="/wrong-answer.png";
              }}></img>
                }
          </div>

          
    </div>
  )
}
