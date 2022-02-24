class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name,:type,:age,:user_id
end
