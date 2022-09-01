Rails.application.routes.draw do
  root "rooms#index"

  get "/items", to: "items#index"
  get "/items/:id", to: "items#show"

  get "/rooms", to: "rooms#index"
  get "/rooms/:id", to: "rooms#show"


  # post "/items", to: "items#create"
  patch "/items/:id", to: "items#patch"
  delete "/items/:id", to: "items#getridof"

  get "rooms/:id/items/", to: "rooms#show_room_items"
  get "rooms/:id/items/:item_id", to: "rooms#show_room_item"

  patch "/rooms/:id/items/:item_id", to: "rooms#item_update"
  delete "/rooms/:id/items/:item_id", to: "rooms#item_destroy"
  post "/rooms", to: "rooms#create_item"


end

