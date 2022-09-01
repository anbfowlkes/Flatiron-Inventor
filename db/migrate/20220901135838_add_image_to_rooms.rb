class AddImageToRooms < ActiveRecord::Migration[7.0]
  def change
    add_column :rooms, :img_src, :string
  end
end
