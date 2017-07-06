class ApplicationController < ActionController::Base


  def current_user
    @user ||= User.find_by(id: @user_id) if @user_id
  end

  def authenticate
    if auth_present?
      begin
        decoded = auth
        @user_id = decoded[0]["user_id"]
      rescue JWT::DecodeError
        errors = [{message: "Token is invalid"}]
      end
        if !current_user || !decoded || errors
          render json: {
            errors: errors
          }, status: 403
        end
      end
     else
       render json: {
         errors:
           {message:"JWT token is required"}
       }, status: 403
     end
  end


  private

  def token
   request.env["HTTP_AUTHORIZATION"].split(" ").last
  end

  def auth
    Auth.decode(token)
  end

  def auth_present?
    !!request.env.fetch("HTTP_AUTHORIZATION",
        "").scan(/Bearer/).flatten.first
  end

end
