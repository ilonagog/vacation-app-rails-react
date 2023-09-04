class Destination < ApplicationRecord
    
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, :location, :image, :description, :price, presence: true

    
end
