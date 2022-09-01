class ItemsController < ApplicationController

    def index
        render json: Item.all
    end

    def show
        item = Item.find_by(id: params[:id])
        render json: item
    end

    
    def create
        item = Item.create!(item_params)
        
    end

    def update
        item = Item.find_by!(id: params[:id])
        
        if item.update(item_params)
            render json: item
        else
            render json: {error: item.errors.full_messages}, status: 422   
        end
        
    end

    def getridof
        item = Item.find_by!(id: params[:id])
        
        if item.destroy
            render json: item
        else
            render json: {error: item.errors.full_messages}, status: 422   
        end
    end

    private

    def item_params
        params.permit(:name, :quantity, :price, :image_url)
    end

end
