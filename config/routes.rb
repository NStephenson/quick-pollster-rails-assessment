Rails.application.routes.draw do

  root to: 'home#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users, only: [:show] do
    resources :polls, only: [ :index, :show ]
  end

  resources :polls
  resources :categories, only: [:new, :index, :create]

  resources :polls, only: :show do
    resources :categories, only: [:new, :index]
  end


  get 'polls/:id/results', to: 'polls#results', as: 'poll_results'
  post 'polls/:id/results', to: 'polls#add_results', as: "poll_add_results"



end
