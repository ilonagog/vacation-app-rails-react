class ReviewsController < ApplicationController
    before_action :authorize
    # skip_before_action :authorize, only: [:index, :show]
    # wrap_parameters format: []
    def index
        reviews = Review.all
        render json: reviews
    end

    def show 
        review = Review.find(id: params[:id])
        render json: review
    end

    # def create
    #     # byebug
    #    user = find_by_session_id
    #    review = user.reviews.create(review_params)
    #    render json: review, status: :created
    # end
    def create
        newreview = @current_user.reviews.create!(review_params)
        render json: newreview
    end

# def update
#     # byebug
#     user = find_by_session_id
#     review = Review.find_by(id: params[:id])
#     review.update(review_params)
#     render json: review
# end
def update
    review = find_by_session_id
    review.update!(review_params)
    render json: review
end


    def destroy
        # byebug
        user = find_by_session_id
        # review = user.reviews.find_by(id: params[:id])
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end


    private

    def find_by_session_id
       review = @current_user.reviews.find_by(id: params[:id])
    end

    def review_params
        params.require(:review).permit( :user_id, :destination_id, :review, :rating)
    end
end
