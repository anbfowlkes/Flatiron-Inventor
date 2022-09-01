puts "Destroying Previous Data"
Room.destroy_all
Item.destroy_all

chair_price = 40
chair_img = "https://cdn.shopify.com/s/files/1/0561/5304/7249/products/VARIANT-SJT-20-704A1A_4T_FL_XT_1_TR_F_TR_F.jpg?v=1659558209&width=1000"
table_price = 100
table_img = "https://www.ikea.com/us/en/images/products/ingo-table-pine__0737092_pe740877_s5.jpg"
monitor_price = 80
monitor_img = "https://m.media-amazon.com/images/I/51v6h2TfPCL._AC_SX450_.jpg"
tv_price = 200
tv_img = "https://images.samsung.com/is/image/samsung/p6pim/levant/ua75au7000uxtw/gallery/levant-uhd-au7000-ua75au7000uxtw-409719120?$720_576_PNG$"
couches_price = 230
couch_img = "https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-metal__0602115_pe680184_s5.jpg"
hdmi_price = 20
hdmi_img = "https://www.cmple.com/content/images/thumbs/cmple-ultra-slim-high-speed-hdmi-cable-hdmi-2-0-hdtv-cable-supports-ethernet-3d-4k-and-audio-return-_NID0014450.jpeg"
projector_price = 300
projector_img = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428551_sd.jpg"
beanbag_price = 30
beanbag_img = "https://target.scene7.com/is/image/Target/GUEST_886fc488-dbe1-4bc1-8d51-9e3f71a12e3b?wid=488&hei=488&fmt=pjpeg"

puts "Seeding data"
r1 = Room.create!(name: "Schwartz", img_src: "https://www.officelovin.com/wp-content/uploads/2015/11/flatiron-school-2.jpg") # main room
r2 = Room.create!(name: "Turing", img_src: "https://i.imgur.com/B6HdeQs.jpeg")
r3 = Room.create!(name: "Hopper", img_src: "https://i.imgur.com/E1EPNkc.jpeg")
r4 = Room.create!(name: "Collins", img_src: "https://i.imgur.com/ohctTvS.jpeg") # corner
r5 = Room.create!(name: "Kay", img_src: "https://i.imgur.com/FciaAxr.jpeg") # hall corner
r6 = Room.create!(name: "Borge", img_src: "https://i.imgur.com/4uX6zPw.jpeg") # phase 5 room
r7 = Room.create!(name: "Windrazor", img_src: "https://i.imgur.com/41IpMBm.jpeg")
r8 = Room.create!(name: "Nightingale", img_src: "https://i.imgur.com/3VhXeW3.jpeg") # data science


# Schwartz (main room)
Item.create!(name: "Chairs", quantity: 100, price: chair_price, image_url: chair_img, room_id: r1.id)
Item.create!(name: "Tables", quantity: 40, price: table_price, image_url: table_img, room_id: r1.id)
Item.create!(name: "Monitors", quantity: 60, price: monitor_price, image_url: monitor_img, room_id: r1.id)
Item.create!(name: "TVs", quantity: 4, price: tv_price, image_url: tv_img, room_id: r1.id)
Item.create!(name: "Couches", quantity: 3, price: couches_price, image_url: couch_img, room_id: r1.id)
Item.create!(name: "HDMI Cords", quantity: 70, price: hdmi_price, image_url: hdmi_img, room_id: r1.id)

# Turing
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r2.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r2.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r2.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r2.id)

# Hopper
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r3.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r3.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r3.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r3.id)

# Collins
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r4.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r4.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r4.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r4.id)

# Kay
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r5.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r5.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r5.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r5.id)

# Borge
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r6.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r6.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r6.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r6.id)

# Windrazor
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r7.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r7.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r7.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r7.id)
# Nightingale
Item.create!(name: "Chairs", quantity: 30, price: chair_price, image_url: chair_img, room_id: r8.id)
Item.create!(name: "Tables", quantity: 100, price: table_price, image_url: table_img, room_id: r8.id)
Item.create!(name: "Projectors", quantity: 100, price: projector_price, image_url: projector_img, room_id: r8.id)
Item.create!(name: "Bean Bags", quantity: 100, price: beanbag_price, image_url: beanbag_img, room_id: r8.id)






puts "Data Seeded"