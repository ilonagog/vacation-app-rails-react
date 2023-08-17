class ReviewsController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index, :show]
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
       user = find_by_session_id
       review = user.reviews.create(review_params)
       render json: review, status: :created
    end

def update
    user = find_by_session_id
    review = Review.find_by(id: params[:id])
    review.update(review_params)
    render json: review
end

    def destroy
        # byebug
        # user = find_by_session_id
        # review = user.reviews.find_by(id: params[:id])
        review = Review.find_by(id: params[:id])
        review.destroy
    end


    private

    def find_by_session_id
        User.find(session[:user_id])
    end

    def review_params
        params.permit( :id, :review_id, :user_id, :destination_id, :review, :rating)
    end
end
