class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    
    # def index 
    #     users.User.all
    #     render json: users
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

    def user_search
        #  byebug #how it knows that n =7?
        n = params[:n].to_i
        # reviews = Review.where("reviews <= ?", params[:n])
        # users- an array of user object

        users =  User.all.select{|u| u.reviews.count > params[:n].to_i}
        users_destinations = users.map {|u|  u.destinations} 
         byebug
        render json: users_destinations.flatten
    #     if 
    #         # reviews.any?   
    #     users = User.all.sort{|user1, user2| user2.reviews.count <=> user1.reviews.count }
    #     #creating an array of objects  with a key -destinations and should give a destinations of the user?
    # else
    #     render error 
    # end
    end
    #     render json: destinations
    # else
    #     #             
        #             render json: reviews
        #      
#  review.find_by
#  User.find(reviews)
#custom route 
# i need ruby array sor method, 
#u1= User.find(1)
#u1.reviews.count

## Create a custom route that takes an argument of a number, n. 
# Use this number to find all the users who have more than n reviews. 
# Then get all the destinations associated with all those users and render this back as json. 
# Make sure to add error handling, for instance when you don't find any users who meet that criterion.



def welcome_users
    render json: {message: "Hey!"}
end

def welcome_user
   user = User.find(params[:id])
   render json: user
end
    private 
    def user_params
        params.permit(:username, :password)
    end
end

