class PollsController < ApplicationController
  before_action :authenticate_user!, only: [ :index, :edit, :update, :destroy ]
  before_action :find_poll, only: [:results, :edit, :update, :add_results, :destroy]

  def index
    if params[:user_id]
      @polls = User.find(params[:user_id]).polls.published_polls
    else
      @polls = Poll.published_polls
    end
  end

  def show
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @poll = @user.polls.find_by(id: params[:id])
      if @poll.nil?
        redirect_to user_polls_path(@user), alert: "Poll not found"
      end
    else
      @poll = Poll.find(params[:id])
    end

    if signed_in?
      redirect_to poll_results_path(@poll) if current_user.polls_responded.include?(@poll)
    end
  end

  def results
  end

  def new
    @poll = Poll.new
    6.times { @poll.responses.build }
  end

  def create
    @poll = Poll.new(new_poll_params)
    @poll.user = current_user if signed_in?
    if @poll.save
      flash[:notice] = "New poll successfully created!"
      redirect_to poll_path(@poll)
    else
      number = 6 - @poll.responses.length
      number.times { @poll.responses.build }
      flash[:error] = "Data invalid."
      render action: 'new'
    end
  end

  def edit
    if current_user != @poll.user 
      redirect_to poll_path(@poll)
    end
  end

  def update
    @poll.update(edit_poll_params)
    if @poll.save
      flash[:notice] = "Poll options updated!"
      redirect_to poll_path(@poll)
    else
      flash[:error] = "Somehow, you managed to fuck up. Congrats."
      render action: 'edit'
    end
  end

  def add_results
    response_params = params.require(:response).permit(:public_response, ids: [])
    response_params[:ids].each do |response_id|
      response = Response.find(response_id.to_i)
      if response.poll == @poll #put this logic in a validate response method?
        response.selected += 1
        response.save
        if signed_in? 
          vote = Vote.new(user: current_user, response: response)
          vote.public_response = response_params[:public_response] if response_params[:public_response]
          vote.save
        else
          #cookies[:polls_responded] = []
          #cookies[:polls_responded] << @poll.id #need working code to stop users not signed in from casting multiple votes
        end 
      end
    end
    redirect_to poll_results_path(@poll)
  end

  def destroy
    if current_user == @poll.user
      @poll.votes.each { |vote| vote.delete }
      @poll.responses.each { |response| response.delete }
      @poll.delete
      redirect_to root_path
    end
  end


  private
  def new_poll_params
    params.require(:poll).permit(:question, :limit_to_survey, :select_multiple, :open, :public_results, :published, responses_attributes: [:id, :text])
  end

  def edit_poll_params
    params.require(:poll).permit(:limit_to_survey, :select_multiple, :open, :public_results, :published)
  end

  def find_poll
    @poll = Poll.find(params[:id])
  end
end
