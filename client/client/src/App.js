import logo from './logo.svg';
import './App.css';
import Home from './Home'
import HomePage from './HomePage'
import Navbar from './Navbar'
import {useState} from 'react'

function App() {
const [enterPage, setEnterPage] =useState(true)



  return (

    <div>
      {enterPage ? 
      <Home /> 
    
      : <HomePage />
      }
      <div id='enter'>
      {enterPage ?
      <button onClick={() => setEnterPage(!enterPage)}>Enter</button> : ''
    }
    </div>
    </div>

  );
}

export default App;
