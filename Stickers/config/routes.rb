Rails.application.routes.draw do
  get 'sticker/index' => 'sticker#index'
  get '/sticker/new' => 'sticker#new'
  post 'sticker/index' => 'sticker#create'
  get 'dashboard/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
