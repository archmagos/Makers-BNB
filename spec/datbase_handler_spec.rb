require 'database_handler'
require 'database_connection'
require 'pg'


describe DatabaseHandler do
  describe '.create' do
    it'should create a listing' do
      listing = { title: 'ship', price: '200', description: 'ship it now' }
      DatabaseHandler.create(listing)
      result = DatabaseConnection.query("SELECT * FROM listings")
      expect(result.map{|db_listing| db_listing['title']}).to include(listing[:title])
      expect(result.map{|db_listing| db_listing['price']}).to include(listing[:price])
      expect(result.map{|db_listing| db_listing['description']}).to include(listing[:description])

    end
  end


end
