require './lib/database_connection'

if ENV['ENVIRONMENT'] == 'test'
  DatabaseConnection.setup('piratesbnb_test')
else
  DatabaseConnection.setup('piratesbnb')
end
