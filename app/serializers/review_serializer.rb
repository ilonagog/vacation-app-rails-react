class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:review, :rating, :destination , :username
    #  :user_id, :destination_id

    def username
     object.user.username
    end
  # belongs_to :destination
  # belongs_to :user
# return destination name associated  with that review


end
