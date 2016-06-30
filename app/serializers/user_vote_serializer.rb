class UserVoteSerializer < ActiveModel::Serializer
  attributes :response_id, :public_response, :created_at, :poll

end