class CreatePollCategories < ActiveRecord::Migration
  def change
    create_table :poll_categories do |t|
      t.integer :poll_id
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
