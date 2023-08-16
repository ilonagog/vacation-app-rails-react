class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :destination_id,  :review, :rating

  belongs_to :destination
  belongs_to :user

end
