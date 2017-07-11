class UsersController < ApplicationController
  before_action :authenticate, only: [:update]

  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user_id: @user.id})
      render json: {user: {id: @user.id, email: @user.email}, sources: @user.source_ids, token: jwt}
    else
      render json: {errors: @user.errors.full_messages},
      status: 500
    end

  end

  def update
    user = User.find_by(id: params[:id])
    if current_user != user
      render json: {errors: {message: ["you are not authorized to view this page"]}},
      status: 403
    else
      user.update(user_params)
      head 201
    end
  end




  private

  def user_params
    params.require(:user).permit(:id, :email, :password, :sources => [])
  end

end
