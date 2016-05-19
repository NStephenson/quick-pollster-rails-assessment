class Survey < ActiveRecord::Base

  belongs_to :user
  has_many :poll_surveys
  has_many :polls, through: :poll_surveys

  
end
