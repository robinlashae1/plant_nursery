class ArbitersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
      arbiters = Arbiter.all
      render json: arbiters  
    end
    def show
        arbiters = find_arbiters
        render json: arbiters, status: :ok
    end
    def create(params)
        arbiters = find_arbiters
        arbiters.create!(params)
        render json: arbiters, status: :created
    end
    def updated
        arbiters = find_arbiters
        arbiters.update!(params)
        render json: arbiters, status: :accepted
    end
    def delete
        arbiters = find_arbiters
        if arbiters
        arbiters.destroy!
        render json: {}
        end
    end
    private
    def find_arbiters
        Arbiter.find_by(id: params[:id])
    end
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end
    def patch_params
        params.permit(:name,:hourly_cost,:email,:phone)
    end
end
