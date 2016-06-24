class UserPollSerializer < ActiveModel::Serializer
  attributes :id, :question, :limit_to_survey, :select_multiple, :public_results, :open, :responses
end
