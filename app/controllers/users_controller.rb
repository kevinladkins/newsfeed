class UsersController < ApplicationController
  before_action :authenticate, only: [:update]

  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user_id: @user.id})
      render json: {user: {id: @user.id, email: @user.email}, sources: @user.source_ids, token: jwt}
    else
      render json: {errors: @user.errors},
      status: 500
    end

  end


  def show
    user = User.find(params[:id])
    render json: {user: user, sources: user.source_ids}
  end

  def update
    user = User.find_by(params[:id])
    if current_user != user
      render json: {errors: {email: ["user not found"]}},
      status: 403
    else
      head 201
    end
  end




  private

  def user_params
    params.require(:user).permit(:id, :email, :password, :sources => [])
  end

end
