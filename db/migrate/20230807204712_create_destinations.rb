class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :description
      t.integer :price

      t.timestamps
    end
  end
end
