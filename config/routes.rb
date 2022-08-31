Rails.application.routes.draw do
  root "rooms#index"

  get "/items", to: "items#index"
  post "/items", to: "items#create"
  patch "/items/:id", to: "items#patch"
  delete "/items/:id", to: "items#destroy"




end

