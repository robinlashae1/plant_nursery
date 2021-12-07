class ArbiterSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_cost, :email, :phone
end
