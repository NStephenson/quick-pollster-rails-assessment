class SurveysController < ApplicationController

  def new
    
  end

  def create

  end 

  def show
    @survey = Survey.find(params[:id])
  end

  def results 
    @survey = Survey.find(params[:id])
  end

  def edit
    
  end

  def update

  end

  def add_results
    raise params.inspect
    @survey = Survey.find(params[:id])
    poll_ids = @survey.polls.map { |poll| poll.id }
    responses = params.require('response')
    # needs logic to ensure all questions were answered 
    if questions_answered?(@survey, responses)
      @survey.polls.each do |poll|

        responses[poll.id.to_s].each do |response_id|
          response = Response.find(response_id.to_i)
          if response.poll == poll #put this logic in a validate response method?
            response.selected += 1
            response.save
            if signed_in? 
              current_user.responses << response 
            else
              cookies[:polls_responded] = []
              cookies[:polls_responded] << poll.id #need working code to stop users not signed in from casting multiple votes
            end 
          end
        end
      end
    end
    redirect_to survey_results_path(@survey)
  end





  private 

  def questions_answered?(survey, responses)
    survey.polls.map { |poll| poll.id.to_s } == responses.keys
  end

  def valid_response?(poll, responses)
    poll.responses.map{ |response| response.id.to_s }.include?(responses[poll.id])
    
  end
end
