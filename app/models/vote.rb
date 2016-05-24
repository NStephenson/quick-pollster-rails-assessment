class Vote < ActiveRecord::Base

  belongs_to :user 
  belongs_to :response
  has_one :poll, through: :response

  def self.public_votes
    all.select { |vote| vote.public_response }
  end
  
end
