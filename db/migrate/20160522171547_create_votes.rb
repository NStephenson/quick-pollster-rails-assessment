class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :response_id
      t.boolean :public_response, default: true

      t.timestamps null: false
    end
  end
end
