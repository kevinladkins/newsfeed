require 'rails_helper'

RSpec.describe User, type: :model do

  describe "create new user" do

     it "requires an email" do
      user = User.new(password: 'password')
      user.save

      expect(user.valid?).to be(false)
      expect(user.errors.full_messages).to eq(["Email can't be blank", "Email is invalid"])
     end


     it "requires email be unique"


     it "requires a password"

  end

end
