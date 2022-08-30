import React from 'react'
import {useState} from 'react'



function RoomCard() {
const [chairs, setChairs] =useState(0)
const [tables, setTables] =useState(0)
const [monitors, setMonitors] =useState(0)
const [name, setName] =useState('Room Name')
const [image, setImage] =useState('https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_FMjpg_UX1000_.jpg')

    return (
        <div class='room-card'>
            <h1 class='room-name'>{name}</h1>
            <img id='room-image'src={image} />
            <div class='inventory'>
                <h3 class='item'>chairs: {chairs}</h3>
                <button onClick={() => {setChairs(chairs - 1)}}>-</button><button onClick={() => {setChairs(chairs + 1)}}>+</button>
                <h3 class='item'>tables: {tables}</h3>
                <button onClick={() => {setTables(tables - 1)}}>-</button><button onClick={() => {setTables(tables + 1)}}>+</button>
                <h3 class='item'>monitors: {monitors}</h3>
                <button onClick={() => {setMonitors(monitors - 1)}}>-</button><button onClick={() => {setMonitors(monitors + 1)}}>+</button>
            </div>

        </div>
    )
}
export default RoomCard