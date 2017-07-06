require 'rails_helper'

RSpec.describe "Sessions", type: :request do

  describe "POST /users" do

    describe "on success" do

      before(:each) do
        params = {
          user: {
            email: 'greg@gmail.com',
            password: 'password1',
            passwordConfirm: 'password1'
          }
        }

        post "/users",
          params: params.to_json,
          headers: { 'Content-Type': 'application/json' }

        @response = response

       end

      it "creates a new user with a valid email and password" do
         body = JSON.parse(@response.body)

         expect(@response.status).to eq(200)
         expect(body['user']['email']).to eq('greg@gmail.com')
         expect(body['user']['id']).not_to eq(nil)

      end

      it "returns a user id and JWT token"

    end

    describe "on failure" do

      it "does not create a new user without a valid email and password"

      it "does not create a new user if one already exists"


    end
  end



end
