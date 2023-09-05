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
        # byebug
    user = User.find_by(id: session[:user_id])
    review = user.reviews.create!(review_params)
    render json: review, status: :created
 end

def update
    # byebug
    user = User.find_by(id: session[:user_id])
    review = Review.find_by(id: params[:id])
    review.update(review_params)
    render json: review
end
    def destroy
        # byebug
        review = Review.find(params[:id])
        review.destroy
    end


    private

    def find_by_session_id
       review = @current_user.reviews.find_by(id: params[:id])
    end

    def review_params
        params.permit(:review, :rating, :user_id, :destination_id  )
    end
end
