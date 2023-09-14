class DestinationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    def index
        render json: Destination.all, status: :ok
    end


    def show
        destination = Destination.find(id: params[:id])
        render json: destination
    end

    def create
        # byebug
        destination  = Destination.create!(destination_params)
        render json: destination, status: :created
    end

    private

    def destination_params
        params.permit(:name, :location, :image, :description, :price)
    end

    # def render_unprocessable_entity_response
    #     render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    # end

    # def render_not_found_response
    #     render json: { error: "Destinations not found" }, status: :not_found
    # end
end
