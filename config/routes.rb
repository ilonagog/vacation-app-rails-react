Rails.application.routes.draw do

  resources :destinations, only: [:index, :show, :create] do
    resources :reviews, only: [:create]
  end

  resources :reviews
# get "/reviews", to: "reviews#index"
# delete "/reviews/:id", to: "reviews#destroy"
# post "/destinations/:destination_id/reviews", to: "reviews#create"
# patch "/reviews/:id", to: "reviews#update"

  # resources :users
  post '/signup', to: 'users#create' #create new user
  get '/me', to: 'users#show' # retrieve current user 
  post "/login", to: "sessions#create" # login and authenticate
  delete "/logout", to: "sessions#destroy" #logout user 


#custom route 
# Create a custom route that takes an argument of a number, n. 
# Use this number to find all the users who have more than n reviews. 
# Then get all the destinations associated with all those users and render this back as json. 
# Make sure to add error handling, for instance when you don't find any users who meet that criterion.
get '/search/:n', to: "users#user_search"




get '/welcome', to: "users#welcome_users"

get "/welcome/:id", to: "users#welcome_user"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
