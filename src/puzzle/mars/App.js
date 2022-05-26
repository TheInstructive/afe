import React, { useEffect } from 'react'

export default function App() {
    useEffect(() => {
    window.location.replace('https://cdn.discordapp.com/attachments/959164357219074109/979447396356489268/mars.png')
      }, [])
  return (
    <div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', flexDirection:'column', minHeight:'800px'}}>
        <h1 style={{color:'white',fontFamily: "Rajdhani", fontSize:'10vw', margin:0, color:"#C71C2C"}}>REDIRECTING...</h1>
        <a href='https://cdn.discordapp.com/attachments/959164357219074109/979447396356489268/mars.png' style={{color:'white',fontFamily: "Rajdhani", fontSize:'1vw', marginTop:"10px", cursor:"pointer", color:'#fff', fontWeight:'800'}}>Click here If you are not redirected.</a>
    </div>
    </div>
  )
}
