class Vote < ActiveRecord::Base

  belongs_to :user 
  belongs_to :response
  has_one :poll, through: :response
  
end
