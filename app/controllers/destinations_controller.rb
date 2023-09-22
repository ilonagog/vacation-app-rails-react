class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: [:index, :show, :create, :destination_reviews]
    wrap_parameters format: []

    def index
        render json: Destination.all, status: :ok
    end

    def create
        destination  = Destination.create!(destination_params)
        render json: destination, status: :created
    end
    
    def show
        destination = Destination.find(params[:id])
        render json: destination
    end


 

    private

    def destination_params
        params.permit(:name, :location, :image, :description, :price)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Destination not found" }, status: :not_found
    end

end
