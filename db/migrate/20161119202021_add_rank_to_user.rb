class AddRankToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :rank, :integer, defalt: 1200, null: false
  end
end
