require 'database_handler'
require 'database_connection'
require 'pg'

describe DatabaseHandler do

  describe '.create' do
    it'should create a listing' do
      listing = { title: 'ship', price: '200', description: 'ship it now', image_url: 'http://google.com', rating: '5', capacity: '3200' }
      DatabaseHandler.create(listing)
      result = DatabaseConnection.query("SELECT * FROM listings")
      expect(result.map{|db_listing| db_listing['title']}).to include(listing[:title])
      expect(result.map{|db_listing| db_listing['price']}).to include(listing[:price])
      expect(result.map{|db_listing| db_listing['description']}).to include(listing[:description])
      expect(result.map{|db_listing| db_listing['image_url']}).to include(listing[:image_url])
      expect(result.map{|db_listing| db_listing['rating']}).to include(listing[:rating])
      expect(result.map{|db_listing| db_listing['capacity']}).to include(listing[:capacity])
    end

    it'does not create a new listing if the URL is not valid' do
      listing = { title: 'ship', price: '200', description: 'ship it now', image_url: 'helloamazone.com', rating: '5', capacity: '3200' }
      DatabaseHandler.create(listing)
      result = JSON.parse(DatabaseHandler.all)
      expect(result.map { |listing| listing['image_url']}.not_to include 'helloamazone.com')
    end
  end




  describe '.all' do
    it'should returns all listings in a JSON ' do
      listing = { 'title': 'ship', 'price': '200', 'description': 'ship it now', 'image_url': 'helloamazone.com', 'rating': '5', 'capacity': '3200' }
      listing2 = { 'title': 'ship2', 'price': '2000', 'description': 'shipssss it now', 'image_url': 'helloamazone.com', 'rating': '5', 'capacity': '3200' }
      DatabaseHandler.create(listing)
      DatabaseHandler.create(listing2)
      p result = JSON.parse(DatabaseHandler.all)
      p 'h;e;;;;;;;sdddddd'
      expect(result.map{|listing| p listing['title']}).to include 'ship'
      expect(result.map{|listing| listing['title']}).to include listing2 'ship2'
    end
  end


end
