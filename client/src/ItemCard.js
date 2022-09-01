import React from 'react'
import {useState} from 'react'
import EditItem from "./EditItem"



function ItemCard({ roomFetch, room_id, item_id, name, quantity, price, img_url}) {


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

  const [displayQuantity, setDisplayQuantity] = useState(myItems.quantity)
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const updateClick = () => {
    console.log(showUpdateForm)
    setShowUpdateForm(!showUpdateForm)
  }

  const deleteClick = async () => {
    let req = await fetch(`http://localhost:9000/rooms/${room_id}/items/${item_id}`, {method: "DELETE"})
    let res = await req.json()
    console.log(res)
    roomFetch()
  }

    return (
        <div id="item-component">
            <div>
                <img id='item-image'src={img_url} />
            </div>
            <div id="item-stock">
                <h2 class='item-name'>{name}</h2>
                <h3>Quantity: {quantity}</h3>
                <h3>{`Price: $${price}`}</h3>
            </div>
            <div>
                <button onClick={updateClick}>Update Item</button>
                <button onClick={deleteClick}>Delete Item</button>
            </div>
            <div>
                {showUpdateForm ? <EditItem roomFetch={roomFetch} room_id={room_id} item_id={item_id} /> : null}
            </div>
        </div>
    )
}
export default ItemCard