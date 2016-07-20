class UsersController < ApplicationController
  before_action :authenticate_user!, only: [ :current_user ]

  def show
    @user = User.find(params[:id])
  end

  def current
    render json: current_user
  end
  
end