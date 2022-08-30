class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :quantity
      t.float :price
      t.string :image_url
      t.integer :room_id

      t.timestamps
    end
  end
end
