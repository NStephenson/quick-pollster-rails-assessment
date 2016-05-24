Rails.application.routes.draw do

  root to: 'home#index'

  devise_for :users
  # resources :surveys
  resources :polls
  resources :users, only: [:show]

  get 'polls/:id/results', to: 'polls#results', as: 'poll_results'
  post 'polls/:id/results', to: 'polls#add_results', as: "poll_add_results"

  # get 'surveys/:id/results', to: 'surveys#results', as: 'survey_results'
  # post 'surveys/:id/results', to: 'surveys#add_results', as: "survey_add_results"



end
