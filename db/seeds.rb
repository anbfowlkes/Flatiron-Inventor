puts "Destroying Previous Data"
Room.destroy_all
Item.destroy_all

chair_price = 40
table_price = 100
monitor_price = 80
tv_price = 200
couches_price = 230
hdmi_price = 20
projector_price = 300
beanbag_price = 30

puts "Seeding data"
r1 = Room.create!(name: "Schwartz") # main room
r2 = Room.create!(name: "Turing")
r3 = Room.create!(name: "Hopper")
r4 = Room.create!(name: "Collins") # corner
r5 = Room.create!(name: "Kay") # hall corner
r6 = Room.create!(name: "Borge") # phase 5 room
r7 = Room.create!(name: "Windrazor")
r8 = Room.create!(name: "Nightingale") # data science


# Schwartz (main room)
Item.create!(name: "Chairs", quantity: 100, price: chair_price, image_url: "", room_id: r1.id)
Item.create!(name: "Tables", quantity: 40, price: table_price, image_url: "", room_id: r1.id)
Item.create!(name: "Monitors", quantity: 60, price: monitor_price, image_url: "", room_id: r1.id)
Item.create!(name: "TVs", quantity: 4, price: tv_price, image_url: "", room_id: r1.id)
Item.create!(name: "Couches", quantity: 3, price: couches_price, image_url: "", room_id: r1.id)
Item.create!(name: "HDMI Cords", quantity: 70, price: hdmi_price, image_url: "", room_id: r1.id)

# Turing
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)

# Hopper
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)

# Collins
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)

# Kay
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)

# Borge
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)

# Windrazor
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)
# Nightingale
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: "", room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: "", room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: "", room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: "", room_id: r2.id)






puts "Data Seeded"