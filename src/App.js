import React, { Component } from 'react';
import './App.css';
import entry from "./images/main.png"
import left_door from "./images/left_door.png"
import right_door from "./images/right_door.png"
import logo from "./images/logo.png"
import menu from "./images/menu.png"
import meteor from "./images/meteor.png"
import teams from './images/teams.png'
import roadmap from './images/roadmap.png'
import story from './images/story.png'
import faq from './images/faq.png'
import mint from './images/mint.png'
import discord from './images/discord.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'


import afelogo from './images/afe_logo.png'




class App extends Component
 {  

  constructor(){
    super();

    this.state = {
       answer1: "answer-deactive",
       answer2: "answer-deactive",
       answer3: "answer-deactive",
       answer4: "answer-deactive",
       answer5: "answer-deactive",
       answer6: "answer-deactive",
       answer7: "answer-deactive",
       answer8: "answer-deactive",
       answer9: "answer-deactive",
       answer10: "answer-deactive",
    }
}

  showAnswers = (e) => {
    const answerID = e.target.id

    this.setState({answer1: "answer-deactive"})
    this.setState({answer2: "answer-deactive"})
    this.setState({answer3: "answer-deactive"})
    this.setState({answer4: "answer-deactive"})
    this.setState({answer5: "answer-deactive"})
    this.setState({answer6: "answer-deactive"})
    this.setState({answer7: "answer-deactive"})
    this.setState({answer8: "answer-deactive"})
    this.setState({answer9: "answer-deactive"})
    this.setState({answer10: "answer-deactive"})

    if(answerID == "answer1"){
      this.setState({answer1: "answer-active"})
    }
    if(answerID == "answer2"){
      this.setState({answer2: "answer-active"})
    }
    if(answerID == "answer3"){
      this.setState({answer3: "answer-active"})
    }
    if(answerID == "answer4"){
      this.setState({answer4: "answer-active"})
    }
    if(answerID == "answer5"){
      this.setState({answer5: "answer-active"})
    }
    if(answerID == "answer6"){
      this.setState({answer6: "answer-active"})
    }
    if(answerID == "answer7"){
      this.setState({answer7: "answer-active"})
    }
    if(answerID == "answer8"){
      this.setState({answer8: "answer-active"})
    }
    if(answerID == "answer9"){
      this.setState({answer9: "answer-active"})
    }
    if(answerID == "answer10"){
      this.setState({answer10: "answer-active"})
    }

  }
  
  componentDidMount() {
    let left_doors = document.getElementById("leftdoor")
    let right_doors = document.getElementById("rightdoor")
    let entry = document.getElementById("entry")

    if(window.innerWidth > 768) {
        window.addEventListener('scroll', function(){
          var value = window.scrollY;
          
          entry.style.transform = `scale(${1+value*0.02})`

          left_doors.style.left = value*-7 + 'px'
          right_doors.style.left = value*7+ 'px'

          left_doors.style.transform = `scale(${1+value*0.02})`
          right_doors.style.transform = `scale(${1+value*0.02})`

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
            <li><a href='#roadmap'>ROADMAP</a></li>
            <li><a href='#faq'>FAQ</a></li>
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
        <div className='teams-container'>
          <div className='team-names'>
            <div className='team-name'><a>DEVALIEN</a> <p>BACKEND DEVELOPER</p></div>
            <div className='team-name'><a>CAX</a> <p>FRONTEND DEVELOPER</p></div>
            <div className='team-name'><a>MON</a> <p>ARTIST</p></div>
          </div>
        </div>
        <img src={teams} id="team_screen"></img>
      </div>

      <div className='in-site'>
        <h2 className='menu-title' id='roadmap'>ROADMAP</h2>
          <div className='roadmap-container'>
            <div className='roadmap-first-row'>
                <div className='roadmap-step' id='roadmap-done'>
                  <div className='fix-images'><img src={meteor}/></div>
                  <h2>GEN-1 BABY ALIENS</h2>
                  <p>Minted <b>100</b> Baby Alien <br></br> minted for <b>$5</b></p>
                </div>

                <div className='roadmap-step'>
                <div className='fix-images'><img src={meteor}/></div>
                  <h2>GEN-2 BABY ALIENS</h2>
                  <p>Minted <b>200</b> Baby Alien <br></br> minted for <b>$10</b></p>
                </div>

                <div className='roadmap-step'>
                <div className='fix-images'><img src={meteor}/></div>
                  <h2>GEN-3 BABY ALIENS</h2>
                  <p>Minted <b>300</b> Baby Alien <br></br> minted for <b>$15</b></p>
                </div>

                <div className='roadmap-step'>
                <div className='fix-images'><img src={meteor}/></div>
                  <h2>GEN-4 BABY ALIENS</h2>
                  <p>Minted <b>400</b> Baby Alien <br></br> minted for <b>$20</b></p>
                </div>
            </div>
            <div className='roadmap-second-row'>
              <div className='roadmap-step'>
              <div className='fix-images'><img src={meteor}/></div>
                  <h2>PREPARATION</h2>
                  <p>Preparation for Aliens from Earth. <br></br> It'll be on Cronos Network and <br></br> Baby Alien holders will get an airdrop.</p>
              </div>
              <div className='roadmap-step'>
              <div className='fix-images'><img src={meteor}/></div>
                  <h2>SPONSORSHIPS</h2>
                  <p>Sponsorships and marketplace decision.</p>
              </div>
              <div className='roadmap-step'>
              <div className='fix-images'><img src={meteor}/></div>
                  <h2>TOKEN</h2>
                  <p>Relased AFE Token. <br></br>Holders will get airdrop as long as they hold NFT.</p>
              </div>

            </div>
          </div>
        <img src={roadmap} id="roadmap_screen"></img>
      </div>

      <div className='in-site'>
        <h2 className='menu-title' id='story'>STORY</h2>
        <div className='story-conainer'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <img src={story} id="story_screen"></img>
      </div>

      <div className='in-site'>
        <h2 className='menu-title' id='faq'>FAQ</h2>

          <div className='faq-container'>
            <div className='first-column'>
          
              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer1'>+</button>
                </div>
                <div className='answer' id={this.state.answer1}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer2'>+</button>
                </div>

                <div className='answer' id={this.state.answer2}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer3'>+</button>
                </div>

                <div className='answer' id={this.state.answer3}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer4'>+</button>
                </div>

                <div className='answer' id={this.state.answer4}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer5'>+</button>
                </div>

                <div className='answer' id={this.state.answer5}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

            </div>

            <div className='secound-column'>

            <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer6'>+</button>
                </div>
                <div className='answer' id={this.state.answer6}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer7'>+</button>
                </div>

                <div className='answer' id={this.state.answer7}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer8'>+</button>
                </div>

                <div className='answer' id={this.state.answer8}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer9'>+</button>
                </div>

                <div className='answer' id={this.state.answer9}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer10'>+</button>
                </div>

                <div className='answer' id={this.state.answer10}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

            </div>
          </div>

        <img src={faq} id="faq_screen"></img>
      </div>

      <div className='in-site'>
        <div className='mint-container'>
          <button>MINT NOW</button>
        </div>
        <img src={mint} id="mint_screen"></img>
      </div>

      <div className='footer'>
          <h2>AFE</h2>     
          <h5>2022 AFE. All rights reserved.</h5>     
          <div className='socials'>
            <a href='#'><img src={discord}></img></a>
            <a href='#'><img src={twitter}></img></a>
            <a href='#'><img src={instagram}></img></a>
          </div>
      </div>
    </body>
     )
  }
}
export default App;