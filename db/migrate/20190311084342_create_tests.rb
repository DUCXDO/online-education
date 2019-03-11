class CreateTests < ActiveRecord::Migration[5.2]
  def change
    create_table :tests do |t|
      t.integer :lesson_id
      t.string :name

      t.timestamps
    end
  end
end
