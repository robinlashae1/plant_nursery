class CreateCourts < ActiveRecord::Migration[6.1]
  def change
    create_table :courts do |t|
      t.string :name
      t.string :location
      t.integer :time
      t.integer :charge_per_hour
      t.integer :team_id
      t.integer :arbiter_id

      t.timestamps
    end
  end
end
