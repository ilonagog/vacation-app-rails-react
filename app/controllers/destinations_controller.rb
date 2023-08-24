class DestinationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]
    # before_action :authorize, only: [:index, :show]
    # wrap_parameters format: []

    def index
        render json: Destination.all, status: :ok
    end


    def show
        render json: @destination, status: :ok
    end

    def create
        destination  = Destination.create!(destination_params)
        render json: destination, status: :created
    end

    private

    def destination_params
        params.permit(:name, :location, :image, :description, :price)
    end
    def find_production
        @destination = Destination.find(params[:id])
    end
end
