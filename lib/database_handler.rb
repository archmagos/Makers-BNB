require 'pg'
require 'json'
require './lib/database_connection.rb'

class DatabaseHandler
  def self.create(listing)
    result = DatabaseConnection.query(
        "INSERT INTO listings (title, price, image_url, rating, capacity, description)
          VALUES(
          '#{listing[:title]}',
          '#{listing[:price]}',
          '#{listing[:image_url]}',
          '#{listing[:rating]}',
          '#{listing[:capacity]}',
          '#{listing[:description]}');"
        )
  end

  def self.all
    result = DatabaseConnection.query("SELECT * FROM listings")
    # maps pg object to array of hashes and converts to json
    {'listings' => result.map { |listing| listing }}.to_json
  end
end
