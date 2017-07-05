require 'rails_helper'

RSpec.describe "Sessions", type: :request do

  before(:each) do
    @user = User.create(email: "greg@gmail.com", password: "password1")
    @source = Source.create(name: "abc-news")
    @user.sources << @source
    @user.save
  end

  describe "POST /login" do

    describe "on success" do

     before(:each) do
       params = {
         user: {
           email: 'greg@gmail.com',
           password: 'password1'
         }
       }

       post "/login",
         params: params.to_json,
         headers: { 'Content-Type': 'application/json' }

       @response = response

      end

       it "returns an existing user and a JWT token" do
         body = JSON.parse(@response.body)

         expect(response.status).to eq(200)
         expect(body['token']).not_to eq(nil)
         expect(body['user']['id']).not_to eq(nil)
         expect(body['user']['email']).to eq('greg@gmail.com')
         expect(body['sources']).to include('abc-news')

       end


    end

    describe "on failure" do

      it "is unable to find user with email" do

        params = {
          user: {
            email: 'bob@gmail.com',
            password: 'password1'
          }
        }

        post "/login",
          params: params.to_json,
          headers: { 'Content-Type': 'application/json' }

        body = JSON.parse(response.body)

        expect(response.status).to eq(500)
        expect(body["errors"]).to eq({"email"=>["user not found"]})

      end

      it "password does not match email" do
        params = {
          user: {
            email: 'greg@gmail.com',
            password: 'monkeys'
          }
        }

        post "/login",
          params: params.to_json,
          headers: { 'Content-Type': 'application/json' }

        body = JSON.parse(response.body)

        expect(response.status).to eq(500)
        expect(body["errors"]).to eq({"password"=>["password does not match provided email"]})

      end

    end

  end

end
