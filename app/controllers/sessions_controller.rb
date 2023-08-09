class SessionsController < ApplicationController
    #log in
    # def create 
    #     user = User.find_by(params[:username])
    #     if user&.authenticate(params[:password])
    #         #sign in 
    #         session[:user_id] = user.id
    #         render json: user, status: :ok
    #     else
    #         render json: {error: "Invalid username or password"}, status: :unauthorized
    #     end

    # end
    # #log out
    # def destroy 
    #     session.clear
    # end
end