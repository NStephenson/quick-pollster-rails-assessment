class PollSerializer < ActiveModel::Serializer
  attributes :id, :question, :limit_to_survey, :select_multiple, :public_results, :open

  has_many :responses, only: [:id, :text, :selected]
  has_one :user, serializer: PollUserSerializer 
end