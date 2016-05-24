class Survey < ActiveRecord::Base

  belongs_to :user
  has_many :poll_surveys
  has_many :polls, through: :poll_surveys

  accepts_nested_attributes_for :polls, reject_if: proc {|attributes| attributes['question'].blank?}

  def self.published_surveys
    all.select { |survey| survey.published }
  end

  
end
