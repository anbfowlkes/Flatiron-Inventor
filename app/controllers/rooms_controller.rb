class RoomsController < ApplicationController

    def index
        rooms = Room.all
        render json: rooms.to_json(methods: [:items])
        # render json: rooms
    end

    def show
        room = Room.find_by!(id: params[:id])
        render json: room
    end
      
    # get "rooms/:id/items/", to: "rooms#show_room_items"
    # get "rooms/:id/items/:item_id", to: "rooms#show_room_item"

    def show_room_items
        room = Room.find_by!(id: params[:id])
        render json: room.items
    end

    def show_room_item
        room = Room.find_by!(id: params[:id])
        item = room.items.find_by!(id: params[:item_id])
        render json: item
    end

    # patch "/rooms/:id/items/:item_id", to: "rooms#item_update"

    def item_update
        room = Room.find_by!(id: params[:id])
        item = room.items.find_by!(id: params[:item_id])
        if item.update(item_params)
            render json: item
        else
            render json: {error: item.errors.full_messages}, status: 422   
        end
    end

    def item_destroy
        room = Room.find_by(id: params[:id])
        item = room.find_by(id: params[:item_id])
        if item.destroy
            render json: item
        else
            render json: {error: item.error.full_messages}, status: 422
        end
    end

    # def destroy
    #     item = Item.find_by!(id: params[:id])
    #     if item.destroy
    #         render json: item
    #     else
    #         render json: {error: item.errors.full_messages}, status: 422   
    #     end
    # end

    private

    # def room_params
    #     params.permit
    # end

    def item_params
        params.permit(:name, :quantity, :price, :image_url)
    end


end
