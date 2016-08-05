class PollCategory < ActiveRecord::Base
  belongs_to :poll
  belongs_to :category
end
