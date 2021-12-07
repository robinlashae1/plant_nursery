class CreateArbiters < ActiveRecord::Migration[6.1]
  def change
    create_table :arbiters do |t|
      t.string :name
      t.integer :hourly_cost
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
