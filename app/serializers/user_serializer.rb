class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :polls, serializer: UserPollSerializer
  has_many :votes, serializer: UserVoteSerializer
end
