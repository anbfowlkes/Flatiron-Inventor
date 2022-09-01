import React from 'react'
import InventoryCards from "./InventoryCards";
import './App.css'
const InventoryPage = () => {
    
  return (
        <>
            <h1 style={{paddingLeft: '2em'}}>Global Inventory</h1>
        <div className="inventory-container">
            <InventoryCards />
        </div>
        </>

  )
}

export default InventoryPage