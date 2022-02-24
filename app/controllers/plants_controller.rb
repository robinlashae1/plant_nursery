class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
      plants = Plant.all
      render json: plants
    end
    def show
        plants = find_plants
        render json: plants, status: :ok
    end
    def create(params)
        plants = find_plants
        plants.create!(params)
        render json: plants, status: :created
    end
    def updated
        plants = find_plants
        plants.update!(params)
        render json: plants, status: :accepted
    end
    def delete
        plants = find_plants
        if plants
            plants.destroy!
        render json: {}
        end
    end
    private
    def find_plants
        Plant.find_by(id: params[:id])
    end
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end
    def patch_params
        params.permit(:name,:type,:age,:user_id)
    end
end
