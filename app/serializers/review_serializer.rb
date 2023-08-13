class ReviewSerializer < ActiveModel::Serializer
  attributes :review, :rating, :user, :destination, :destination_id, :user_id
  belongs_to :user
  belongs_to :destination

  # def destination
  #   {name:object.destination.name}
  # end
end
