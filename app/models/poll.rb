class Poll < ActiveRecord::Base

  belongs_to :user
  has_many :responses
  has_many :poll_surveys
  has_many :surveys, through: :poll_surveys
  has_many :votes, through: :responses 


  accepts_nested_attributes_for :responses, reject_if: proc {|attributes| attributes['text'].blank?}

  validates :question, presence: true
  validates :responses, length: {in: 2..6}

  
end
