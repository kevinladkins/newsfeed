class UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    render json: {user: user, sources: user.source_ids}
  end
end
