Rails.application.routes.draw do
  resources :users, only: [:index]
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
  root to: 'users#index'
end
