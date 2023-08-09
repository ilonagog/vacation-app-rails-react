class ReviewSerializer < ActiveModel::Serializer
  attributes :review, :rating, :user, :destination, :destination_id, :user_id
  has_one :user

  def destination
    {name:object.destination.name}
  end
end
