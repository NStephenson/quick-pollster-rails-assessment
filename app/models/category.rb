class Category < ActiveRecord::Base

  has_many :poll_categories
  has_many :polls, through: :poll_categories

  validates :name, presence: true
  validates :name, format: { with: /\A[a-zA-Z]+[a-zA-Z|\s]+\z/,
    message: "only allows letters and spaces" }

end
