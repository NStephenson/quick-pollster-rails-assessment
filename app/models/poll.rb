class Poll < ActiveRecord::Base

  has_many :user_polls
  has_many :users, through: :polls 
  has_many :poll_surveys
  has_many :surveys, through: :poll_surveys
  has_many :responses

  
end
