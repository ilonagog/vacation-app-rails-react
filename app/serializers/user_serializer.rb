class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :reviews
  has_many :destinations
end
