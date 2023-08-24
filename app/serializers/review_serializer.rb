class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:review, :rating , :username, :destination
    belongs_to :user
  
    def username
     object.user.username
    end

    def destination
      {name: object.destination.name}
    end
# return destination name associated  with that review


end
