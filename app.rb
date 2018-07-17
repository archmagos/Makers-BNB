require 'sinatra/base'

# Understands loading and managing pages appropriate to the website
class PiratesBNB < Sinatra::Base
  set :method_override, true

  get '/' do
    send_file './views/index.html'
  end

  run! if app_file == $PROGRAM_NAME
end
