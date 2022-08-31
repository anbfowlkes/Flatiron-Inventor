import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    let getItems = async () => {
      let req = await fetch('http://localhost:3000/items')
      let res = await req.json()
      console.log("Response", res)
      setItems(res)
    }
    getItems()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('hi')
    let itemID = e.target[0].value
    console.log("item id: ", itemID)
    console.log("url:" + `http://localhost:3000/items/${itemID}`)
    await fetch(`http://localhost:3000/items/${itemID}`, {method:"DELETE"})
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    console.log('hi')
    let update_id = e.target[0]
    let new_name = e.target[1]
    let new_quantity = e.target[2]
    let new_price = e.target[3]
    let new_image = e.target[4]

    let req = await fetch(`http://localhost:3000/rooms/12/items/${update_id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: new_name,
        quantity: new_quantity,
        price: new_price,
        image_url: new_image
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }
    )
    let res = await req.json()
    console.log(res)

  }

  const handleClick = (i) => {
    console.log(i)
  }

  return (
    <div className="App">
      <div>
        <h1>Items</h1>
        {
          items.map((item) => {
            {let i = item.id}
            return (
              <div onClick={(i) => handleClick(i)} key={item.id}>
                {item.name}
              </div>
            )
          })
        }
      </div>
      <div className="buttons">
        <form onSubmit={handleSubmit} >
          <input type='text' placeholder="item id"/>
          <input type='submit' value="delete item"/>
        </form>
        <h2>Update Item</h2>
        <form onSubmit={handleUpdateSubmit}>
          <input type="text" placeholder="item id"/>
          <input type="text" placeholder="new name"/>
          <input type="text" placeholder="new quantity"/>
          <input type="text" placeholder="new price"/>
          <input type="text" placeholder="new image url"/>
          <input type="submit" value="update item" />
        </form>

      </div>
    </div>
  );
}

export default App;
