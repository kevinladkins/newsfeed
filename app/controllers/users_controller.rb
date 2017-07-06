class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user: @user.id})
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



  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
