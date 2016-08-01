module PollsHelper

  def vote_percent(response)
    response.selected/response.poll.vote_total
  end

  def responded_to?(poll)
    current_user.polls_responded.include?(poll)
  end

  def poll_form_or_results_if_responded(poll)
    if responded_to?(poll)
      render partial: "polls/poll_results", locals: {poll: poll} 
    else 
      render partial: "polls/poll", locals: {poll: poll, survey: false} 
    end 
  end

end
