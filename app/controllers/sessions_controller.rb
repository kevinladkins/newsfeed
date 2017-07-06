class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: user_params[:email])
    if !@user
      render json: {errors: {email: ["user not found"]}},
      status: 500
    elsif @user && @user.authenticate(user_params[:password])
      jwt = Auth.issue({user_id: @user.id})
      render json: {user: {id: @user.id, email: @user.email}, sources: @user.source_ids, token: jwt}
    else
      render json: {errors: {password: ["password does not match provided email"]}},
      status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
