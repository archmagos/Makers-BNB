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
      listing = { title: 'pass', price: '200', description: 'ship it now', image_url: 'http://helloamazone.com', rating: '5', capacity: '3200' }
      listing2 = { title: 'fail', price: '200', description: 'ship it now', image_url: 'helloamazone.com', rating: '5', capacity: '3200' }

      DatabaseHandler.create(listing)
       result = JSON.parse(DatabaseHandler.all)['listings']
       # p result = DatabaseHandler.all
       expect(result.map { |listing| listing['image_url']}).not_to include 'helloamazone.com'
       expect(result.map { |listing| listing['image_url']}).to include 'http://helloamazone.com'

    end
  end

  describe '.create_booking' do
    it'should create a booking' do
      listing = { title: 'pass', price: '200', description: 'ship it now', image_url: 'http://helloamazone.com', rating: '5', capacity: '3200' }
      DatabaseHandler.create(listing)

      result = DatabaseConnection.query("SELECT id FROM listings").values[0][0]
      booking = { name: 'John', listing_id: result, start_week: '44', end_week: '46' }
      DatabaseHandler.create_booking(booking)

      result = DatabaseConnection.query("SELECT * FROM bookings")
      expect(result.map{|db_booking| db_booking['name']}).to include(booking[:name])
      expect(result.map{|db_booking| db_booking['listing_id']}).to include(booking[:listing_id])
      expect(result.map{|db_booking| db_booking['start_week']}).to include(booking[:start_week])
      expect(result.map{|db_booking| db_booking['end_week']}).to include(booking[:end_week])
    end
  end





  describe '.all' do
    it'should returns all listings in a JSON ' do
      listing = { 'title': 'ship', 'price': '200', 'description': 'ship it now', 'image_url': 'http://helloamazone.com', 'rating': '5', 'capacity': '3200' }
      listing2 = { 'title': 'ship2', 'price': '2000', 'description': 'shipssss it now', 'image_url': 'http://google.com', 'rating': '5', 'capacity': '3200' }
      DatabaseHandler.create(listing)
      DatabaseHandler.create(listing2)
      # p result = DatabaseHandler.all

      result = JSON.parse(DatabaseHandler.all)['listings']
      expect(result.map { |listing| listing['title'] }).to include 'ship'
      expect(result.map { |listing| listing['title'] }).to include 'ship2'
    end
  end

  describe '.all_bookings' do
    it'should returns all bookings in a JSON ' do

      listing = { title: 'pass', price: '200', description: 'ship it now', image_url: 'http://helloamazone.com', rating: '5', capacity: '3200' }
      DatabaseHandler.create(listing)

      result = DatabaseConnection.query("SELECT id FROM listings").values[0][0]
      booking = { name: 'John', listing_id: result, start_week: '44', end_week: '46' }
      booking2 = { name: 'Nabil', listing_id: result, start_week: '47', end_week: '48' }
      DatabaseHandler.create_booking(booking)
      DatabaseHandler.create_booking(booking2)


      result2 = JSON.parse(DatabaseHandler.all_bookings)['bookings']
      expect(result2.map { |booking| booking['name'] }).to include 'John'
      expect(result2.map { |booking| booking['name'] }).to include 'Nabil'
    end
  end


end
