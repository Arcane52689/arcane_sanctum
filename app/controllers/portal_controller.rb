class PortalController < ApplicationController

  def home
    if logged_in?
      render 'home'
    else
      render 'welcome'
    end
  end

end