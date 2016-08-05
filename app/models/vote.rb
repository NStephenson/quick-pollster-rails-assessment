class Vote < ActiveRecord::Base

  belongs_to :user 
  belongs_to :response
  has_one :poll, through: :response

  validates :user, presence: true
  validates :response, presence: true
  validates :response, uniqueness: {scope: :user, 
    message: 'You\'ve already made this vote!' 
  }

  def self.public_votes
    where(public_response: true)
  end
  
end
