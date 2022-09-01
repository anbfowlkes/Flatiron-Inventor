import React from 'react'
import { useState, useEffect } from 'react'
import ItemCard from "./ItemCard"
import {useParams} from 'react-router-dom'

function RoomCard() {
    const {room_name} = useParams()
    
    const [showRoom, setShowRoom] = useState({})
    const [showItems, setShowItems] = useState([])

    const roomFetch = async () => {
        let req = await fetch('http://localhost:9000/rooms')
        let res = await req.json()
        console.log("Response Data: ", res)

        // setShowRoom(res)
        res.forEach((item) => {
            if (item.name.toLowerCase() == room_name) {
                setShowRoom(item)
                setShowItems(item.items)
                console.log("item is: ", item)
            }
        })
    }
    useEffect(()=>{
        roomFetch()
    }, [])
    console.log("Room object: ", showRoom)
    console.log('room name: ', room_name)

    const postItem = async (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let quantity = e.target[1].value
        let price = e.target[2].value
        let img_url = e.target[3].value
        
        let req = await fetch('http://localhost:9000/rooms', {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                quantity: quantity,
                price: price,
                image_url: img_url,
                room_id: showRoom.id
            })
        })
        let res = await req.json()
        console.log(res)
        roomFetch()
    }
    
    return (
        <div className='outer-div'>
        
            <div class='room-card' style={{ backgroundImage: `url(${showRoom.img_src})` }}>
                <div >
                    <h2 class='room-name'>{showRoom.name}</h2>
                        {/* <img id='room-image'src={image} /> */}
                </div>
                <div className='add-item'>
                    <form onSubmit={postItem}>
                        <input type="text" placeholder="New Item Name" />
                        <input type="text" placeholder="New Quantity" />
                        <input type="text" placeholder="New Price" />
                        <input type="text" placeholder="New Image URL" />
                        <input type="submit" value="Add Item" />
                    </form>
                </div>
                <div class='inventory' style={{ backgroundImage: showRoom.img_src }}>
                    {showItems.map((item) => {
                        return(
                            <ItemCard key={item.id} room_id={showRoom.id} item_id={item.id} name={item.name} quantity={item.quantity} price={item.price} img_url={item.image_url} />
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}
export default RoomCard