require 'sinatra/base'

# Understands loading and managing pages appropriate to the website
class PiratesBNB < Sinatra::Base
  set :method_override, true

  get '/' do
    erb(:index)
  end
end
