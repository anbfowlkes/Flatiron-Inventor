import React from 'react'
import './home.css'
import Sunset from './video/Sunset.mp4'
import {useState} from 'react'

function Home() {
  
  return (
    <div>
      <video 
      autoPlay loop muted style={{ position: 'absolute', width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
      >
        <source src={Sunset} type='video/mp4'/>
      </video>
      <div className='welcome'>
        <h1 style={{ color: '#93e6e3'}}>Welcome to Flatiron Inventory</h1>
        
      </div>
    </div>
  )
}

export default Home



