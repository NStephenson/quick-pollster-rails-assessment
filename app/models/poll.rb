class Poll < ActiveRecord::Base

  belongs_to :user
  has_many :responses
  has_many :poll_surveys
  has_many :surveys, through: :poll_surveys
  has_many :votes, through: :responses 


  accepts_nested_attributes_for :responses, reject_if: proc {|attributes| attributes['text'].blank?}

  validates :question, presence: true
  validates :responses, length: {in: 2..6}


  def self.published_polls
    where(published: true)
  end

  def vote_total
    total = 0
    responses.each do |response|
      total += response.selected
    end
    total
  end

  
end
