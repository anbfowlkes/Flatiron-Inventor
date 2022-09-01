import logo from './logo.svg';
import './App.css';
import Home from './Home'
import HomePage from './HomePage'
import Navbar from './Navbar'
import RoomCard from './RoomCard'
import InventoryPage from './InventoryPage'
import {useState} from 'react'
import {Switch, Route} from 'react-router-dom'



function App() {
  const [enterPage, setEnterPage] =useState(true)
  return (

    <div>
      <Navbar />
        <Switch>
          <Route path="/inventory">
            <InventoryPage  />
          </Route>
          <Route path="/:room_name">
            <RoomCard  />
          </Route>
          <Route path="/" exact>
              {enterPage ? 
              <Home /> 
            
              : <HomePage />
              }
              

          </Route>

        </Switch>
    </div>

  );
}

export default App;
