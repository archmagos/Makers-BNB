require 'sinatra/base'
require './lib/database_handler.rb'
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
      image_url: params['image_url'],
      rating: params['rating'],
      capacity: params['capacity'],
      description: params['description']
    )
    redirect 'http://localhost:3000/listings'
  end

  get '/listings' do
    DatabaseHandler.all
  end

  post '/bookings' do
    DatabaseHandler.create_booking(
      name: params['name'],
      start_week: params['start_week'],
      end_week: params['end_week'],
      listing_id: params['listing_id']
    )
    redirect 'http://localhost:3000/listings'
  end

  get '/bookings' do
    DatabaseHandler.all_bookings
  end

  run! if app_file == $PROGRAM_NAME
end
