class Vote < ActiveRecord::Base

  belongs_to :user 
  belongs_to :response
  has_one :poll, through: :response

  def self.public_votes
    where(public_response: true)
  end
  
end
