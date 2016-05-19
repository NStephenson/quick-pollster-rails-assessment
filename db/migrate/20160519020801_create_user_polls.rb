class CreateUserPolls < ActiveRecord::Migration
  def change
    create_table :user_polls do |t|
      t.integer :user_id
      t.integer :poll_id
      t.boolean :owner

      t.timestamps null: false
    end
  end
end
