import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"
import StarfieldAnimation from 'react-starfield-animation'
import carix from './images/carix.png'
import mon from './images/mon.png'
import devalien from './images/devalien.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='logo'>AFE</div>

        <div className='menu'>
          <li><a href='/'>HOME</a></li>
          <li><a href='#roadmap'>ROADMAP</a></li>
          <li><a href='#story'>STORY</a></li>
          <li><a href='#team'>TEAM</a></li>
        </div>

        <div className='right-top'>
          <a href='https://discord.gg/427XNcsVJV' target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
          <a href='https://twitter.com/AFECronos' target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
          {/*<a><FontAwesomeIcon icon={faInstagram} /></a>*/}
        </div>

      </header>

      <div className='slider'>
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '800px'
        }}
      />

        <div className='slider-title'>
        <a>ALIENS FROM EARTH</a>
        <div class="spinner scroll-down"> <a class="animate"></a> </div>
        </div>

      </div>


      <div className='title' id='roadmap'>ROADMAP</div>
      <div className='border-container'><div className='border'></div></div>
      <div className='roadmap-container'>
        <div className='roadmap'>

          {/*
          <div className='left-step'>
            <div className='l-step-dot'>
            <div className='step'>STEP 1</div>
            <div className='c-dot'></div>
            </div>
          <div className='step-ex'>Madde aciklaması buraya gelecek.</div>
          </div>

          <div className='left-step'>
            <div className='l-step-dot'>
            <div className='step'>STEP 2</div>
            <div className='n-dot'></div>
            </div>
          <div className='step-ex'>Madde aciklaması buraya gelecek.</div>
          </div>

          <div className='left-step'>
            <div className='l-step-dot'>
            <div className='step'>STEP 3</div>
            <div className='n-dot'></div>
            </div>
          <div className='step-ex'>Madde aciklaması buraya gelecek.</div>
          </div>
        
        */
      }
              </div> 
      </div>


      <div className='story' id='story'>
        <div className='title'>STORY</div>
        <div className='border-container'><div className='border'></div></div>

        <div className='story-container'>
          <div className='story-left'>
            <img src='https://picsum.photos/300/300'></img>
          </div>

          <div className='story-right'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

        </div>

      </div>

      <div className='team' id='team'>
      <div className='title'>TEAM</div>
      <div className='border-container'><div className='border'></div></div>

        <div className='team-members'>
        <div className='member'>
          <div style={{fontWeight:'800'}} className='member-name'>DEVALIEN</div>
          <div className='avatar'><img width={'100%'} src={devalien}></img></div>
          <div style={{fontSize:'12pt'}}  className='member-name'>BACKEND DEVELOPER</div>
        </div>

        <div className='member'>
        <div style={{fontWeight:'800'}} className='member-name'>MON</div>
          <div className='avatar'><img width={'100%'} src={mon}></img></div>
          <div style={{fontSize:'12pt'}}  className='member-name'>ARTIST</div>
        </div>

        <div className='member'>
        <div style={{fontWeight:'800'}} className='member-name'>CARIX</div>
          <div className='avatar'><img width={'100%'} src={carix}></img></div>
          <div style={{fontSize:'12pt'}} className='member-name'>FRONTEND DEVELOPER</div>
        </div>

        </div>
      </div>

      <div className='footer'>

      </div>


    </div>
  );
}

export default App;
