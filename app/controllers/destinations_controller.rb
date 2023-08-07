class DestinationsController < ApplicationController
    def index
        destinations = Destination.all
        render json: destinations, status: :ok
    end
end
