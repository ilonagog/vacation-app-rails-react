class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :description, :price
  has_many :users
  has_many :reviews
end
