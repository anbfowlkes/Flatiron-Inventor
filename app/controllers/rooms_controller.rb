class RoomsController < ApplicationController

    def index
        rooms = Room.all
        render json: rooms.to_json(methods: [:items])
    end

    def update
        item = Item.find_by!(id: params[:id])
        
        if item.update(item_params)
            render json: item
        else
            render json: {error: item.errors.full_messages}, status: 422   
        end
        
    end

    def destroy
        item = Item.find_by!(id: params[:id])
        
        if item.destroy(item_params)
            render json: item
        else
            render json: {error: item.errors.full_messages}, status: 422   
        end
    end

    private

    def blog_params
        params.permit(:name, :quantity, :price, :image_url)
    end


end
