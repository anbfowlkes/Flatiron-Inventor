r1 = Room.create!(name: "Hopper")
r2 = Room.create!(name: "Kay")
r3 = Room.create!(name: "Turing")


item1 = Item.create!(name: "Chairs", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r1.id)
item1 = Item.create!(name: "tables", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r1.id)
item1 = Item.create!(name: "tvs", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r1.id)
item1 = Item.create!(name: "monitors", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r2.id)
item1 = Item.create!(name: "Chairs", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r2.id)
item1 = Item.create!(name: "Chairs", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r3.id)
item1 = Item.create!(name: "Tables", quantity: 100, price: 20.56, image_url: "https://m.media-amazon.com/images/I/711pw34wa1L._AC_SL1500_.jpg", room_id: r3.id)