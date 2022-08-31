import React from 'react'
import RoomCard from './RoomCard.js'

function HomePage() {
    return (
      <div className="App">
        <header >
        <img className="App-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/640px-FS_wiki.png" />
          {/* <h1>Inventory</h1> */}
        </header>
        <div>
        <RoomCard />
        </div>
        <nav>
        </nav>
      </div>)
}

export default HomePage