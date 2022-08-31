import React from 'react'
import RoomCard from './RoomCard.js'
import Navbar from './Navbar.js'

function HomePage() {
    return (
      <div className="App">
        <Navbar />
        <header style={{backgroundColor: 'white'}}>
       
          {/* <h1>Inventory</h1> */}
        </header>
        
        <div id="bg">
          <div>
          
        <RoomCard />
         </div>
          <h1></h1>
        </div>
        <nav>
        </nav>
      </div>)
}

export default HomePage