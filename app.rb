require 'sinatra/base'
require './lib/database_handler.rb'
# require 'sinatra/json'

# Understands loading and managing pages appropriate to the website
class PiratesBNB < Sinatra::Base
  set :method_override, true

  get '/listings/new' do
    send_file './views/index.html'
  end

  post '/listings' do
    DatabaseHandler.create(
      title: params['title'],
      price: params['price'],
      description: params['description']
    )
  end

  get '/listings' do
    DatabaseHandler.all
  end

  run! if app_file == $PROGRAM_NAME
end
