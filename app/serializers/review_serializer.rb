class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:review, :rating ,  :destination_id, :user_id, :username, :destination
    belongs_to :user
    belongs_to :destination
  
    def username
     object.user.username
    end

    # def destination
    #   {name: object.destination.name,
    # id: object.destination.id}
    # end
# return destination name associated  with that review

end
