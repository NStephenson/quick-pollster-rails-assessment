class PollsController < ApplicationController

  def show
    @poll = Poll.find(params[:id])
    # add logic to redirect to full survey if poll question is limited to a survey
  end

  def results
    @poll = Poll.find(params[:id])
  end

  def new
    @poll = Poll.new
    6.times { @poll.responses.build }
  end

  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      if signed_in?
        UserPoll.create(user: current_user, poll: @poll, owner: true)
      end
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
  end

  def update
    raise poll_params.inspect
  end


  private
  def poll_params
    params.require(:poll).permit(:question, :limit_to_survey, :select_multiple, :open, :public_results, responses_attributes: [:id, :text])
  end
end
