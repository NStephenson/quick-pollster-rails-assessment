class Category < ActiveRecord::Base

  belongs_to :poll

  validates :poll, presence: true
  validates :name, presence: true
  validates :name, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }

end
