Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :v1, default: { format: 'json'} do
    get 'greetings' => 'greetings#index'
  end

  # react routes

  get '*page', to: 'static#index', constraints: ->(req) do
  !req.xhr? && req.format.html?
end

  #root
  root 'static#index'
end
