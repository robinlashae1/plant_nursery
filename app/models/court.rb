class Court < ApplicationRecord
    belongs_to :team
    belongs_to :arbiter
end
