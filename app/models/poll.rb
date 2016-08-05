class Poll < ActiveRecord::Base

  belongs_to :user
  has_many :responses
  has_many :votes, through: :responses 
  has_many :poll_categories
  has_many :categories, through: :poll_categories


  accepts_nested_attributes_for :responses, reject_if: proc {|attributes| attributes['text'].blank?}

  validates :question, presence: true
  validates :responses, length: {in: 2..6}

  scope :published_polls, -> {where(published: true)}

  def categories_attributes=(category_attributes)
    category_attributes.values.each do |category_attribute|
      category = Category.find_or_create_by(category_attribute)
      self.categories << category
    end
  end

  def vote_total
    total = 0
    responses.each do |response|
      total += response.selected
    end
    total
  end

  
end
