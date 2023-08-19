class SessionsController < ApplicationController
    # skip_before_action :authorize, only: [:create, :destroy]
    wrap_parameters format: []
    # log in
    def create 
    # byebug
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            #sign in 
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end
    # #log out
    def destroy 
        session.clear
    end
end