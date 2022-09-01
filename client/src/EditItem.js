import React from 'react'
import { useState, useEffect } from 'react'

const EditItem = ( {roomFetch, room_id, item_id} ) => {


    const updateName = async (e) => {
        e.preventDefault()
        let new_name = e.target[0].value
        let req = await fetch(`http://localhost:9000/rooms/${room_id}/items/${item_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: new_name
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        roomFetch()
    }

    const updateQuantity = async (e) => {
        e.preventDefault()
        let new_quantity = e.target[0].value
        let req = await fetch(`http://localhost:9000/rooms/${room_id}/items/${item_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                quantity: new_quantity
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        roomFetch()
    }

    const updatePrice = async (e) => {
        e.preventDefault()
        let new_price = e.target[0].value
        let req = await fetch(`http://localhost:9000/rooms/${room_id}/items/${item_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                price: new_price
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        roomFetch()
    }

    const updateImage = async (e) => {
        e.preventDefault()
        let new_image = e.target[0].value
        let req = await fetch(`http://localhost:9000/rooms/${room_id}/items/${item_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                image_url: new_image
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        roomFetch()
    }


    return(
        <div>
            <form onSubmit={updateName}>
                <input type="text" placeholder="Update Item Name"/>
                <input type="submit" value="Update Item Name" />
            </form>
            <form onSubmit={updateQuantity}>
                <input type="text" placeholder="Update Quantity"/>
                <input type="submit" value="Update Quantity" />
            </form>
            <form onSubmit={updatePrice}>
                <input type="text" placeholder="Update Price"/>
                <input type="submit" value="Update Price"/>
            </form>
            <form onSubmit={updateImage}>
                <input type="text" placeholder="Update Image URL" />
                <input type="submit" value="Update Image" />
            </form>
        </div>
    )
}



export default EditItem