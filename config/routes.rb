Rails.application.routes.draw do
  get 'fallback/index'
  resources :users, only: [:index]
  # root to: 'users#index'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
