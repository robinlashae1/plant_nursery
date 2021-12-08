class CourtsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
      courts = Court.all
      render json: courts  
    end
    def show
        courts = find_courts
        render json: courts, status: :ok
    end
    def create(params)
        courts = find_courts
        courts.create!(params)
        render json: courts, status: :created
    end
    def updated
        courts = find_courts
        courts.update!(params)
        render json: courts, status: :accepted
    end
    def delete
        courts = find_courts
        if courts
            courts.destroy!
        render json: {}
        end
    end
    private
    def find_courts
        Court.find_by(id: params[:id])
    end
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end
    def patch_params
        params.permit(:name,:location,:time,:charge_per_hour,:team_id,:arbiter_id)
    end
end
