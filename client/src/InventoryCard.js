import React from 'react'

const InventoryCard = ({item}) => {
  return (
    <div className="inventory-card">
      <div className="inventory-image-container">
        <img className="inventory-image" src={item.image_url} />
      </div>
      <div className="inventory-content">
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Total Value: ${item.price}</p>
      </div>
    </div>
  );
}

export default InventoryCard