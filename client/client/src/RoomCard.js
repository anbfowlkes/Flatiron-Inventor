import React from 'react'
import {useState} from 'react'
import ItemCard from "./ItemCard"


function RoomCard() {
    const anyArray = [0,1]

// const [chairs, setChairs] =useState(0)
// const [tables, setTables] =useState(0)
// const [monitors, setMonitors] =useState(0)
const [name, setName] =useState('Turing')
const [image, setImage] =useState('https://www.officelovin.com/wp-content/uploads/2015/11/flatiron-school-2.jpg')

    return (
        <div>
        
        <div class='room-card'>
        <div>
        <h2 class='room-name'>{name}</h2>
            <img id='room-image'src={image} />
            
            
        </div>
            <div class='inventory'>
                {anyArray.map(example => {
                    return(
                        <ItemCard />
                    )
                })}
               
               
            </div>

        </div>
        </div>
    )
}
export default RoomCard