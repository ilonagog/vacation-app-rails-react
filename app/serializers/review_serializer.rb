class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:review, :rating ,  :destination_id, :user_id, :username, :destination_name
    belongs_to :user
    belongs_to :destination
  
    def username
     object.user.username
    end

    def destination_name
       object.destination.name
    end
# return destination name associated  with that review

end
