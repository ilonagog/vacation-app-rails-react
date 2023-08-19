class UsersController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create]
    wrap_parameters format: []
    def index 
        users.User.all
        render json: users
    end
    #get current user
    def show
        # user = User.find_by(id: session[:user_id])
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
        session[:user_id] = user.id
        if user.valid?
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

# #     def show
# #         user = User.find(params[:id])
# #         render json: user, include: [:reviews => {:include => :destination}]
# #     end
# # # end
# class UsersController < ApplicationController
#     # before_action :authorize, except: [:create, :index]
#     # def index 
#     #     users.User.all
#     #     render json: users
#     # end
#     def create 
#         user = User.create(user_params)
#         if user.valid?
#             session[:user_id] = user.id
#             render json: user
#         else
#             render json: {errors: user.errors.full_messages}, status: :unprocessable_entiry
#         end
#     end

     
    
#     def show
#         user = User.find_by(id: session[:user_id])
#         if user 
#             render json: user, include: [:reviews => {:include => :destination}]
#         else
#             render json: {error: "Not Authorized"}, status: :unauthorized
#         end
#     end
#     #signup

#     #get current user
#     private 

#     def user_params
#         params.permit(:username, :password)
#     end
# end
