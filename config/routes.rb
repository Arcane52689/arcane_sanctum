Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'portal#home'

  #Users
  resources :users, only: [:new, :create]
  get 'users/:id/confirm', to: 'users#confirm'
end
