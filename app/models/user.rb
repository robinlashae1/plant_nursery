class User < ApplicationRecord
    has_secure_password
    has_many :plants
    has_many :comments, through: :plants
end
