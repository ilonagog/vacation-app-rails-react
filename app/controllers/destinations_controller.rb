class DestinationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

    wrap_parameters format: []
    def index
        render json: Destination.all, status: :ok
    end


    def show
        destination = Destination.find(id: params[:id])
        render json: destination
    end

    def create
        destination  = Destination.create!(destination_params)
        render json: destination, status: :created
    end

    private

    def destination_params
        params.permit(:name, :location, :image, :description, :price)
    end

end
