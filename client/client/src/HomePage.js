import React from 'react'
import RoomCard from './RoomCard.js'

function HomePage() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Flatiron Inventory</h1>
        </header>
        <div>
        <RoomCard />
        </div>
        <nav>
        </nav>
      </div>)
}

export default HomePage