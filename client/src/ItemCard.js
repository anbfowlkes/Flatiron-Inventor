import React from 'react'
import {useState} from 'react'




function ItemCard({quantity, name, image}) {


const myItems = {
    id: 18,
    name: "Chairs",
    quantity: 100,
    price: 40.0,
    image_url: "https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-SJT-20-704A1A_4T_FL_XT_1_TR_F_TR_F.jpg?v=1659558209&width=1000",
    room_id: 12,
    created_at: "2022-08-30T19:28:08.946Z",
    updated_at: "2022-08-30T19:28:08.946Z"
  }

  const [displayQuantity, setDisplayQuantity] =useState(myItems.quantity)

    return (
        <div id="item-component">
        
            <div class='item-card'>
          
                <img id='item-image'src={myItems.image_url} />
                <div id="item-stock">
                <h2 class='item-name'>{myItems.name}</h2>
                <h3>Quantity: {displayQuantity}</h3>
                <button id="quantity-button" onClick={() => {setDisplayQuantity(displayQuantity - 1)}}>-</button><button onClick={() => {setDisplayQuantity(displayQuantity + 1)}}>+</button>
                </div>
              
                
            </div>

        </div>
        
    )
}
export default ItemCard