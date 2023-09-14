class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :uniq_dest
  # has_many :reviews
  # has_many :destinations 

  def uniq_dest
    object.destinations.uniq
  end
  
end
