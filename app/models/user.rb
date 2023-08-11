class User < ApplicationRecord
    has_many :reviews
    has_many :destinations, through: :reviews
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true
    has_secure_password
end
