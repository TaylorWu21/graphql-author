Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
