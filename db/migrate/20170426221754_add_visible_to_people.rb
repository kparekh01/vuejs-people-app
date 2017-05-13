class AddVisibleToPeople < ActiveRecord::Migration[5.0]
  def change
    add_column :people, :visible, :boolean, default: true
  end
end
