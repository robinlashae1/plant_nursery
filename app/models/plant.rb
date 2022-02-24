class Plant < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_one :plant_type
end
