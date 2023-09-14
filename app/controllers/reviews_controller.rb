class ReviewsController < ApplicationController
    # before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    def index
        reviews = Review.all
        render json: reviews
    end

    def show 
        review = Review.find(id: params[:id])
        render json: review
    end

    def create
        user = find_user_by_session_id
        review = user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        user = find_user_by_session_id
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review
    end
    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end


    private

    def find_user_by_session_id
        user = User.find_by(id: session[:user_id])
    end

    def review_params
        params.permit(:review, :rating, :user_id, :destination_id  )
    end
end
