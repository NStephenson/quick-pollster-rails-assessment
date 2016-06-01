class Vote < ActiveRecord::Base

  belongs_to :user 
  belongs_to :response
  has_one :poll, through: :response

  validates :user_id, uniqueness: { scope: :response_id }
  #add validation to ensure that for questions w/o select multiple, multiple responses can't be given

  def self.public_votes
    where(public_response: true)
  end
  
end
