class CreateStickers < ActiveRecord::Migration[5.0]
  def change
    create_table :stickers do |t|
      t.string :name
      t.string :date
      t.string :content
      t.int    :color
      t.int    :import
      t.int    :x
      t.int    :y
      t.timestamps
    end
  end
end
