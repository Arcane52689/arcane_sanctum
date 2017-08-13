class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true
      t.string :password_digest, null: false
      t.string :email, null: false, index: true
      t.string :confirmation_token, index: true
      t.datetime :confirmation_date

      t.timestamps
    end
  end
end
