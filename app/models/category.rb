class Category < ActiveRecord::Base

  has_many :poll_categories
  has_many :polls, through: :poll_categories

  validates :poll, presence: true
  validates :name, presence: true
  validates :name, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }

end
