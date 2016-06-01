module UserHelper

  def is_my_poll?(poll)
    poll.user && poll.user == current_user
  end

  def not_my_poll?(poll)
    poll.user && poll.user == current_user
  end

end
