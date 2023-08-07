class DestinationsController < ApplicationController
    def index
        destinations = Destination.all
        render json: destinations, status: :ok
    end


    def show
        destination = Destination.find(params[:id])
        render json: destination, status: :ok

    rescue ActiveRecord::RecordNotFound => error
        render json: {message: error.message}
    end

    def create
        destination  = Destination.create(destination_params)
        render json: destination, status: :created
    end

    private

    def destination_params
        params.permit(:name, :location, :image, :description, :price)
    end
end
