class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.string :text
      t.integer :selected
      t.integer :poll_id

      t.timestamps null: false
    end
  end
end
