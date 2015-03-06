class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.string :author
      t.text :content

      t.timestamps null: false
    end
  end
end
