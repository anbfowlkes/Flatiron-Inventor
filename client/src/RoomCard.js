import React from 'react'
import { useState, useEffect } from 'react'
import ItemCard from "./ItemCard"
import {useParams} from 'react-router-dom'

function RoomCard() {
    const {room_name} = useParams()
    
    const [showRoom, setShowRoom] = useState({})
    const [showItems, setShowItems] = useState([])

    useEffect(()=>{
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
        roomFetch()
    }, [])
    console.log("Room object: ", showRoom)
    console.log('room name: ', room_name)
    const anyArray = [0,1]

    const [name, setName] =useState('Turing')
    const [image, setImage] =useState('https://www.officelovin.com/wp-content/uploads/2015/11/flatiron-school-2.jpg')
    
    return (
        <div>
        
            <div class='room-card'>
                <div>
                    <h2 class='room-name'>{showRoom.name}</h2>
                        {/* <img id='room-image'src={image} /> */}
                        
                        
                </div>
                <div class='inventory'>
                    {showItems.map((item) => {
                        return(
                            <ItemCard room_id={showRoom.id} item_id={item.id} name={item.name} quantity={item.quantity} price={item.price} img_url={item.image_url} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default RoomCard