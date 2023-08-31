class Review < ApplicationRecord
    belongs_to :user
    belongs_to :destination
    # validates  :destination_id, presence: true
    validates :review, presence: true
    validates :rating, presence: true
end
