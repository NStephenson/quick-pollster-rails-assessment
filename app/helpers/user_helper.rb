module UserHelper

  def you_or_user(user)
    if user == current_user
      "You"
    else
      user.username
    end
  end

end
