Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/people' => 'people#index'
  namespace :api do
    namespace :v1 do
      get '/people' => 'people#index'
      post '/people' => 'people#create'
      get '/people/:id' => 'people#show'
      put '/people/:id' => 'people#edit'
      delete '/people/:id' => 'people#destroy'
    end
  end
end
