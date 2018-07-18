require 'sinatra/base'
# require 'sinatra/json'
require './database_connection_setup'

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
