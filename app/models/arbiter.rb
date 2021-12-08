class Arbiter < ApplicationRecord
    has_many :teams
    has_many :teams, through: :courts
end
