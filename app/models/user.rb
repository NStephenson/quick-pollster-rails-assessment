class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :polls
  has_many :votes
  has_many :responses, through: :votes
  has_many :surveys


  def polls_responded
    responses.map { |response| response.poll }.uniq
  end
  

end
