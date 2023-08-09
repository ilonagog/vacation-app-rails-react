Rails.application.routes.draw do
  
  resources :reviews, only: [:create]
  # resources :users, only: [:update, :destroy]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  resources :destinations, only: [:index, :show, :create]












  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
