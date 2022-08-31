import React from 'react'
import {useState} from 'react'



function ItemCard({quantity, name, image}) {


const myItems = {
    id: 18,
    name: "Chairs",
    quantity: 100,
    price: 40.0,
    image_url: "https://www.ewinracing.com/1365-large_default/ewin-champion-series-ergonomic-computer-gaming-office-chair-with-pillows-pink-bunny-cpj.jpg",
    room_id: 12,
    created_at: "2022-08-30T19:28:08.946Z",
    updated_at: "2022-08-30T19:28:08.946Z"
  }

    return (
        <div id="item-component">
            <h1 class='item-name'>{myItems.name}</h1>
        
            <div class='item-card'>
          
                <img id='item-image'src={myItems.image_url} />
                <h3>Quantity: {myItems.quantity}</h3>
                
            </div>

        </div>
        
    )
}
export default ItemCard