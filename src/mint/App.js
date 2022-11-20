import React from 'react'
function App() {
  return (

    <div>
        <div style={{position:'relative', width:'%100', height:80}}>
        <section style={{position:'relative'}}>
        <header id='header'>
        <ul>
            <li><a href='#' className='active-menu'>MINT</a></li>
            <li><a href='#'>MY COLLECTIONS</a></li>
            <li><a href='#'>THE LAB</a></li>
        </ul>
        <button id='connect-wallet'>CONNECT WALLET</button>
        </header>
        </section>
    </div>
    <h2 className='menu-title'>SOON</h2>
  </div>
  
  )
}

export default App