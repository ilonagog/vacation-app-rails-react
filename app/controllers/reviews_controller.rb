class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
       user = find_user_by_session_id
       review = user.reviews.create!(review_params)
       render json: review, status: :created
    end

    def show 
    end

    private

    def find_user_by_session_id
        User.find_by(id: session[:user_id])
    end
    def review_params
        params.permit(:destination_id, :user_id, :review,:rating)
    end
end
