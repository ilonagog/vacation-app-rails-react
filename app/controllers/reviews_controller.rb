class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # skip_before_action :authorize, only: [:index, :show]
    def index
        reviews = Review.all
        render json: reviews
    end

    def show 
        review = Review.find(params[:id])
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

    def find_reviews
        n = params[:n].to_i
        reviews = Review.where("rating > ?", n)
        # byebug
        if reviews.any?
            render json: reviews.map{|review| review.user}.uniq
        else
            render json: {error: "No review found"}
        end
    end



    private

    def find_user_by_session_id
        user = User.find_by(id: session[:user_id])
    end

    def review_params
        params.permit(:review, :rating, :user_id, :destination_id  )
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Destination not found" }, status: :not_found
    end
end
