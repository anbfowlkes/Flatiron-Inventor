import React from 'react'
import { useState, useEffect } from 'react'
import './navbar.css'

function Navbar() {
  const [allRooms, setAllRooms] = useState([])
  useEffect(() => {
    const getRooms = async () => {
      let req = await fetch('http://localhost:9000/rooms')
      let res = await req.json()
      console.log(res)
      setAllRooms(res)
    }
    getRooms()
  }, [])

  return (
      <nav className="navbar navbar-expand-lg bg-light" id='nav-id'>
        <div className="container-fluid">
          <p className="navbar-brand" href="#"> </p>
          <img className="App-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/640px-FS_wiki.png" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li  className="nav-items">
                <a className="nav-link" href="/inventory">Inventory</a>
              </li>

            {allRooms.map((item) => {
              return (
                <li key={item.id} className="nav-items">
                  <a className="nav-link" href={item.name.toLowerCase()}>{item.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
       </div>
      </nav>
  )
}
export default Navbar

















