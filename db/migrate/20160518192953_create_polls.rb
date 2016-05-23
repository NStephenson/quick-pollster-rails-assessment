class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.string :question
      t.integer :user_id
      t.boolean :limit_to_survey, default: false
      t.boolean :select_multiple, default: false
      t.boolean :public_results, default: true
      t.boolean :open, default: true

      t.timestamps null: false
    end
  end
end
