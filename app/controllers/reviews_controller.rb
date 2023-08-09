class ReviewsController < ApplicationController
    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    private
    def review_params
        params.permit(:destination_id, :user_id, :review,:rating)
    end
end
