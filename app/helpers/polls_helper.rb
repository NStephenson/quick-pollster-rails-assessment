module PollsHelper

  def vote_percent(response)
    response.selected/response.poll.vote_total
  end

  def responded_to?(poll)
    current_user.polls_responded.include?(poll)
  end
end
