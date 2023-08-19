class ApplicationController < ActionController::API
  # before_action :authenticate_user
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordInvalid, with: :record_not_found

  # def current_user
  #   @current_user ||= User.find_by(session [:user_id]) #without this already memorizes?
  # end

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
end


  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found(error)
    render json: {message: error.message}, status: :not_found
  end

end
