class RemovePollIdFromCategories < ActiveRecord::Migration
  def change
    remove_column :categories, :poll_id, :integer
  end
end
