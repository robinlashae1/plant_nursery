class CreateUpdates < ActiveRecord::Migration[6.1]
  def change
    create_table :updates do |t|
      t.string :status
      t.string :comment
      t.integer :user_id
      t.integer :plant_id

      t.timestamps
    end
  end
end
