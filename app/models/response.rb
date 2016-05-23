class Response < ActiveRecord::Base

  belongs_to :poll
  has_many :votes
  has_many :users

  validates :text, presence: true

  
end
