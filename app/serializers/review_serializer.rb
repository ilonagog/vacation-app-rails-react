class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:review, :rating, :destination, 
    #  :user_id, :destination_id

  # belongs_to :destination
  # belongs_to :user
# return destination name associated  with that review
  def destination 
    # byebug
    {title: object.destination.name }
  end

end
