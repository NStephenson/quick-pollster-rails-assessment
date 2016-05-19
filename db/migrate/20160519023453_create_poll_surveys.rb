class CreatePollSurveys < ActiveRecord::Migration
  def change
    create_table :poll_surveys do |t|
      t.integer :poll_id
      t.integer :survey_id

      t.timestamps null: false
    end
  end
end
