class Review < ApplicationRecord
    belongs_to :user
    belongs_to :destination
  
    validates :review, presence: true
    validates :rating, presence: true
end
