import React from 'react'
import './navbar.css'

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-light" id='nav-id'>
        <div class="container-fluid">
          <p class="navbar-brand" href="#"> </p>
          <img className="App-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/640px-FS_wiki.png" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/swartz">Swartz</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/touring">Turing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/hopper">Hopper</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/collins">Collins</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/kay">Kay</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/borge">Borge</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/windrazor">Windrazor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/nightingale">Nightingale</a>
            </li>
          </ul>
        </div>
       </div>
      </nav>
  )
}
export default Navbar

















