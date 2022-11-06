import React, { Component } from 'react';
import './App.css';
import entry from "./images/main.png"
import giristest from "./images/menu.png"
import left_door from "./images/left_door.png"
import right_door from "./images/right_door.png"
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
import mobilegiris from './images/mobilegiris.png'
import mobileteams from './images/teams-mobile.png'
import roadmapmobile from './images/roadmap-mobile.png'







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
          <ul>
            <li><a href='#' className='active-menu'>HOME</a></li>
            <li><a href='#teams'>TEAM</a></li>
            <li><a href='#roadmap'>ROADMAP</a></li>
            <li><a href='#faq'>FAQ</a></li>
          </ul>
          <button id='connect-wallet'>CONNECT WALLET</button>
        </header>
        <img src={afelogo} id="afelogo"></img> 
        <img src={giristest} id="menu_screen"></img>

        <img src={right_door} id="rightdoor"></img>
        <img src={left_door} id="leftdoor"></img>
      </section>

<div>
      <div className='nfts-container'>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
      </div>
</div>

      <div className='in-site'>
        <h2 className='menu-title' id='teams'>TEAM</h2>
        <div className='teams-container'>
          <div className='team-names'>
            <div className='team-name'><a>DEVALIEN</a> <p>BACKEND DEVELOPER</p></div>
            <div className='team-name'><a>CAX</a> <p>FRONTEND DEVELOPER</p></div>
            <div className='team-name'><a>MON</a> <p>ARTIST</p></div>
          </div>
        </div>
        <img src={teams} id="team_screen"></img>
      </div>

      <div className='discord-container'>
      <div></div>

        <div className='discord-left'>
          <img src='https://i.imgur.com/yQp71Y0.png'></img>
        </div>

        <div className='discord-right'>
          <h1>JOIN OUR DISCORD!</h1>
          <p>Don't miss anything.</p>
          <a href='https://discord.com/invite/wwq8QPnVAf' target="_blank"><button>JOIN!</button></a>
        </div>
        <div></div>
      </div>

      <div className='in-site'>
        <h2 className='menu-title' id='roadmap'>ROADMAP</h2>
          <div className='roadmap-container'>
            <div className='roadmap-first-row'>
                <div className='roadmap-step' id='roadmap-done'>
                  <div className='fix-images' id='current-step'><img src={meteor}/></div>
                  <h2>PHASE 1</h2>
                  <ul>
                    <li>Launch <b>Discord</b> and <b>Website</b></li>
                    <li>Implement feedbacks</li>
                    <li>Reward community with <b>NFT, CRO, WL</b> giveaways</li>
                    <li>Launch the <b>Baby Aliens</b> Collection!</li>
                  </ul>
                </div>

                <div className='roadmap-step'>
                <div className='fix-images'><img src={meteor}/></div>
                  <h2>PHASE 2</h2>
                  <ul>
                    <li>Decisions with the community about future projects</li>
                    <li>Reward current <u>Baby Aliens holders</u> with exclusive airdrops and CRO</li>
                    <li>Building foundation for the <b>Aliens from Earth Game</b> which you can improve your NFTs traits.</li>
                  </ul>
                </div>

                <div className='roadmap-step'>
                <div className='fix-images'><img src={meteor}/></div>
                  <h2>PHASE 3</h2>
                  <ul>
                    <li><b>Partnerships</b> and growing community</li>
                    <li>Enable votes for some decisions for the Aliens from Earth project</li>
                    <li>Building foundation for the Aliens from Earth NFT collection which is a <b>key to access</b> to the game!</li>
                    <li>Reward current Baby Aliens holders with Aliens from Earth NFT airdrops</li>
                  </ul>
                </div>

            </div>
            <div className='roadmap-second-row'>
            <div className='roadmap-step'>
                <div className='fix-images'><img src={meteor}/></div>
                  <h2>PHASE 4</h2>
                  <ul>
                    <li>Release Aliens from Earth game demo</li>
                    <li>Test the game with Aliens from Earth holders</li>
                    <li>Host <b>AMAs</b> with the community and <u>implement suggestions & feedback</u> for the game</li>
                  </ul>
                </div>

              <div className='roadmap-step'>
              <div className='fix-images'><img src={meteor}/></div>
                  <h2>PHASE 5</h2>
                  <ul>
                    <li>Building foundation for the <b>$AFE</b> token which is <u>game currency!</u></li>
                    <li>Reward current Baby Aliens holders with <b>$AFE</b> airdrops</li>
                    <li>$AFE TOKEN SALE!</li>
                  </ul>
              </div>
            </div>
          </div>
        <img src={roadmap} id="roadmap_screen"></img>
      </div>

      <div className='in-site'>
        <h2 className='menu-title' id='story'>STORY</h2>
        <div className='story-container'>
          <p>Preparing...</p>
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
                  <p>AFE is an organization that creates nft collections on the crypto.com/nft and Cronos Chain </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is BABY ALIENS project?</h2>
                    <button onClick={this.showAnswers} id='answer2'>+</button>
                </div>

                <div className='answer' id={this.state.answer2}>
                  <p>BABY ALIENS is a collection of <b>3.333 uniquely generated NFTs</b> minted on <b>Cronos Chain</b> Each NFT has different attributes with different rarities. A BABY ALIEN is also the key of the AFE organization's other projects.
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>How can I get a BABY ALIEN?</h2>
                    <button onClick={this.showAnswers} id='answer3'>+</button>
                </div>

                <div className='answer' id={this.state.answer3}>
                  <p>We will announce the marketplace we have contracted with. Join our Discord, follow us on Twitter and stay tuned!</p>
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
                  <p>Preparing...
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer7'>+</button>
                </div>

                <div className='answer' id={this.state.answer7}>
                  <p>Preparing...
                  </p>
                </div>
              </div>

              <div className='question-container'>
                <div className='question'>
                    <h2>What is AFE?</h2>
                    <button onClick={this.showAnswers} id='answer8'>+</button>
                </div>

                <div className='answer' id={this.state.answer8}>
                  <p>Preparing...
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

      <div className='mobile-container'>
        <img src={mobilegiris}></img>
      </div>

      <div className='mobile-showcase'>
      <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
        <img src='https://i.imgur.com/yQp71Y0.png'></img>
        <img src='https://i.imgur.com/Tupbprh.png'></img>
      </div>
      
      <div className='mobile-container'>
        <h2 className='mobile-title' id='teams-mobile'>TEAM</h2>
        <img src={mobileteams}></img>
      </div>

      <div className='mobile-container'>
        <h2 className='mobile-title' id='roadmap-mobile'>ROADMAP</h2>
        <div className='mobile-roadmap-container'>
          <div className='mobile-roadmap-step'>
            <h2>PHASE 1</h2>
              <ul>
                <li>Launch <b>Discord</b> and <b>Website</b></li>
                <li>Implement feedbacks</li>
                <li>Reward community with <b>NFT, CRO, WL</b> giveaways</li>
                <li>Launch the <b>Baby Aliens</b> Collection!</li>
              </ul>
          </div>

          <div className='mobile-roadmap-step'>
                    <h2>PHASE 2</h2>
                    <ul>
                      <li>Decisions with the community about future projects</li>
                      <li>Reward current <u>Baby Aliens holders</u> with exclusive airdrops and CRO</li>
                      <li>Building foundation for the <b>Aliens from Earth Game</b> which you can improve your NFTs traits.</li>
                    </ul>
          </div>

          <div className='mobile-roadmap-step'>
                    <h2>PHASE 3</h2>
                    <ul>
                      <li><b>Partnerships</b> and growing community</li>
                      <li>Enable votes for some decisions for the Aliens from Earth project</li>
                      <li>Building foundation for the Aliens from Earth NFT collection which is a <b>key to access</b> to the game!</li>
                      <li>Reward current Baby Aliens holders with Aliens from Earth NFT airdrops</li>
                    </ul>
          </div>

          <div className='mobile-roadmap-step'>
                    <h2>PHASE 4</h2>
                    <ul>
                      <li>Release Aliens from Earth game demo</li>
                      <li>Test the game with Aliens from Earth holders</li>
                      <li>Host <b>AMAs</b> with the community and <u>implement suggestions & feedback</u> for the game</li>
                    </ul>
          </div>

          <div className='mobile-roadmap-step'>
                    <h2>PHASE 5</h2>
                    <ul>
                      <li>Building foundation for the <b>$AFE</b> token which is <u>game currency!</u></li>
                      <li>Reward current Baby Aliens holders with <b>$AFE</b> airdrops</li>
                      <li>$AFE TOKEN SALE!</li>
                    </ul>
          </div>
        </div>
      </div>

      <div className='mobile-container'>
        <h2 className='mobile-title'>STORY</h2>
        <div className='story-container-mobile'>
          <p>Preparing...</p>
        </div>
      </div>

      <div className='mobile-container'>
        <h2 className='mobile-title' id='faq-mobile'>FAQ</h2>
        <div className='faq-container-mobile'>
        <div className='mobile-question-container'>
                <div className='mobile-question'>
                    <h2>What is AFE?</h2>
                </div>
                <div className='mobile-answer'>
                  <p>AFE is an organization that creates nft collections on the crypto.com/nft and Cronos Chain </p>
                </div>
              </div>

              <div className='mobile-question-container'>
                <div className='mobile-question'>
                    <h2>What is BABY ALIENS project?</h2>
                </div>

                <div className='mobile-answer'>
                  <p>BABY ALIENS is a collection of <b>3.333 uniquely generated NFTs</b> minted on <b>Cronos Chain</b> Each NFT has different attributes with different rarities. A BABY ALIEN is also the key of the AFE organization's other projects.
                  </p>
                </div>
              </div>

              <div className='mobile-question-container'>
                <div className='mobile-question'>
                    <h2>How can I get a BABY ALIEN?</h2>
                </div>

                <div className='mobile-answer'>
                  <p>We will announce the marketplace we have contracted with. Join our Discord, follow us on Twitter and stay tuned!
                  </p>
                </div>
                </div>

                <div className='mobile-question-container'>
                <div className='mobile-question'>
                    <h2>What is AFE?</h2>
                </div>
                <div className='mobile-answer' >
                  <p>Preparing...
                  </p>
                </div>
              </div>

              <div className='mobile-question-container'>
                <div className='mobile-question'>
                    <h2>What is AFE?</h2>
                </div>

                <div className='mobile-answer' >
                  <p>Preparing...
                  </p>
                </div>
              </div>

              <div className='mobile-question-container'>
                <div className='mobile-question'>
                    <h2>What is AFE?</h2>
                </div>

                <div className='mobile-answer'>
                  <p>Preparing...
                  </p>
                </div>
              </div>
        </div>
      </div>

      <div className='mobile-container'>
        <div className='mobile-mint-container'>
          <button>MINT NOW</button>
        </div>
      </div>

      <header id='mobile-header'>
          <ul>
            <li><a href='#teams-mobile'>TEAM</a></li>
            <li><a href='#roadmap-mobile'>ROADMAP</a></li>
            <li><a href='#faq-mobile'>FAQ</a></li>
          </ul>
          <button id='mobile-connect-wallet'>CONNECT WALLET</button>
        </header>

      <div className='mobile-footer'>
          <h2>AFE</h2>   
          <h5>2022 AFE. All rights reserved.</h5>
          <div className='mobile-socials'>
            <a href='#'><img src={discord}></img></a>
            <a href='#'><img src={twitter}></img></a>
            <a href='#'><img src={instagram}></img></a>
          </div>
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

{/*
        <animateMotion
        fill="freeze"
        dur="5s"
        repeatCount="1"
        path="M5,0.27H1150c90.92-7.26,168.37,64.38,170,150,1.67,87.73-76.78,163.32-170,156H55v386" />
*/}