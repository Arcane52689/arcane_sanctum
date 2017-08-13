class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    return @current_user if @current_user.present?
    return nil unless session[:user_id].present?
    @current_user = User.find(session[:user_id])
  end

  def logged_in?
    !!current_user
  end
end
