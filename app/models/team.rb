class Team < ApplicationRecord
    has_many :arbiters
    has_many :arbiters, through: :courts
end
