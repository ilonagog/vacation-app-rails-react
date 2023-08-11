Rails.application.routes.draw do

  resources :destinations, only: [:index, :show, :create]
  #   resources :reviews, only: [:create]
  # end

  
  # resources :reviews

get "/reviews", to: "reviews#index"
post "/destinations/:destination_id/reviews", to: "reviews#create"


  # resources :users, only: [:update, :destroy]
  post '/signup', to: 'users#create' #create new user
  get '/me', to: 'users#show' # retrieve current user 
  post "/login", to: "sessions#create" # login and authenticate
  delete "/logout", to: "sessions#destroy" #logout user 

  # resources :users, only: [:show] do
  #   resources :reviews, only: [:index]
  # end



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
