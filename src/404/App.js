import React from 'react'
import planet from "../puzzle/images/envoy.png"
import { useNavigate } from "react-router-dom";



export default function App() {
    const navigate = useNavigate();

    function goBack() {
        navigate("/puzzle/");
    }
    

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', flexDirection:'column', minHeight:'800px'}}>
        <h1 style={{color:'white',fontFamily: "Rajdhani", fontSize:'10vw', margin:0, color:"#C71C2C"}}>404</h1>
        <p style={{color:'white',fontFamily: "Rajdhani", fontSize:'1vw', margin:0}}>The page you are looking for has been destroyed by Aliens</p>
        <a onClick={goBack} style={{color:'white',fontFamily: "Rajdhani", fontSize:'1vw', marginTop:"10px", cursor:"pointer", color:'#C71C2C', fontWeight:'800'}}>go back</a>
    </div>
  )
}
