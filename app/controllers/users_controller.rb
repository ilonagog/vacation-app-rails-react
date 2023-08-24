class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    # wrap_parameters format: []
    def index 
        users.User.all
        render json: users
    end
    #get current user
    # def show
    #     render json: @current_user, include: ["reviews", "reviews.destination"], status: :0k
    # end
    def show
        user =  User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok
        else
            render json: {error: "Not Authorized"}
        end
    end
#     #signup
    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id # should remember who the user is??????
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entiry
        end
    end

    private 
    def user_params
        params.permit(:username, :password)
    end
end

