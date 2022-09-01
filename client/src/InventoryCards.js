import React, { useEffect, useState } from 'react'
import InventoryCard from './InventoryCard'
const InventoryCards = () => {
    const [inventory, setInventory]= useState([])
    useEffect(() => {
        const getInventory = async () => {
            const req = await fetch("http://localhost:9000/items");
            const res = await req.json()
            setInventory(res)
        }
        
        getInventory()
    }, [])
    const uniqueInventory = []
    console.log(inventory)
    inventory.forEach((item) => {
        const foundItem = uniqueInventory.find(inventoryItem => inventoryItem.name === item.name)
        if (!foundItem) {
            item.price = item.price * item.quantity
          uniqueInventory.push(item);
        } else {
          foundItem.quantity += item.quantity;
          foundItem.price += (item.price * item.quantity);
        }
    }, [])
    console.log(uniqueInventory)
  return (
    <div className="inventory-wrapper">
      {uniqueInventory?.map((item) => (
        <InventoryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default InventoryCards