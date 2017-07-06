require 'rails_helper'

RSpec.describe User, type: :model do

  describe "create new user" do

     it "requires an email" do
      user = User.new(password: 'password')
      user.save

      expect(user.valid?).to be(false)
      expect(user.errors.full_messages).to eq(["Email can't be blank", "Email is invalid"])
     end

     it "requires email to be in correct format" do
       user = User.new(password: 'password', email: 'kevinatgmail.com')
       user.save

       expect(user.valid?).to be(false)
       expect(user.errors.full_messages).to eq(["Email is invalid"])
     end


     it "requires email to be unique" do
       user = User.new(password: 'password', email: 'kevinladkins@gmail.com')
       user1 = User.new(password: 'passoword1', email: 'kevinladkins@gmail.com')
       user.save
       user1.save

       expect(user.valid?).to be(true)
       expect(user1.valid?).to be(false)
       expect(user1.errors.full_messages).to eq(["Email has already been taken"])

     end


     it "requires a password"

  end

end
