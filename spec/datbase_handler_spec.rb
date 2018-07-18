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

  describe '.all' do
    it'should returns all listings in a JSON ' do
      listing = { 'title': 'ship', 'price': '200', 'description': 'ship it now' }
      listing2 = { 'title': 'ship2', 'price': '2000', 'description': 'shipssss it now' }
      DatabaseHandler.create(listing)
      DatabaseHandler.create(listing2)
      result = JSON.parse(DatabaseHandler.all)
      expect(result.map{|listing| listing['title']}).to include 'ship'
      expect(result.map{|listing| listing['title']}).to include 'ship2'
    end
  end


end
