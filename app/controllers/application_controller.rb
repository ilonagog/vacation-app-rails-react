class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_res
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_res

  before_action :authorize

  private 
  def authorize
      @current_user = User.find_by(id: session[:user_id])

      render json: {error: "Not Authorized!"}, status: :unauthorized unless @current_user
  end

  # def render_unprocessable_entity(invalid)
  #   render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  # end

  # def record_not_found(error)
  #   render json: {message: error.message}, status: :not_found
  # end
  def render_unprocessable_entity_res(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_record_not_found_res
    render json: { errors: "Record not found." }, status: :not_found 
  end

end
