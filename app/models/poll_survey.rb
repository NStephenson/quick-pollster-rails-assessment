class PollSurvey < ActiveRecord::Base

  belongs_to :poll 
  belongs_to :survey 

   
end
