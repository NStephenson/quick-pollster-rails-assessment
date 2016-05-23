class PollsController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update, :destroy]

  def show
    @poll = Poll.find(params[:id])
    redirect_to results_path(@poll) if current_user.polls_responded.include?(@poll)
    redirect_to survey_path(@poll.survey) if @poll.limit_to_survey 
  end

  def results
    @poll = Poll.find(params[:id])
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
    @poll = Poll.find(params[:id])
    if current_user != @poll.user 
      redirect_to poll_path(@poll)
    end
  end

  def update
    @poll.update(poll_params)
    if @poll.save
      flash[:notice] = "Poll options updated!"
      redirect_to poll_path(@poll)
    end
    flash[:error] = "Somehow, you managed to fuck up. Congrats."
    render action: 'edit'
  end

  def add_results
    @poll = Poll.find(params[:id])
    params.require('response').each do |response_id|
      response = Response.find(response_id.to_i)
      if response.poll == @poll
        response.selected += 1
        response.save
        if signed_in? 
          current_user.responses << response 
        else
          cookies[:polls_responded] = []
          cookies[:polls_responded] << @poll.id #need working code to stop users not signed in from casting multiple votes
        end 
      end
    end
    redirect_to results_path(@poll)
  end

  def destroy
    @poll = Poll.find(params[:id])
    @poll.responses.each { |response| response.delete }
    @poll.delete
    redirect_to root_path
  end


  private
  def new_poll_params
    params.require(:poll).permit(:question, :limit_to_survey, :select_multiple, :open, :public_results, responses_attributes: [:id, :text])
  end

  def edit_poll_params
    params.require(:poll).permit(:limit_to_survey, :select_multiple, :open, :public_results)
  end
end
