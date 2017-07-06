require 'rails_helper'

RSpec.describe "Sessions", type: :request do

  describe "POST /users" do

    describe "on success" do

      it "creates a new user with a valid email and password"

      it "returns a user id and JWT token"

    end

    describe "on failure" do
      
      it "does not create a new user without a valid email and password"

      it "does not create a new user if one already exists"


    end
  end



end
