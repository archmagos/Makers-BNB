require 'pg'
require 'json'
require 'uri'
require './lib/database_connection.rb'

class DatabaseHandler
  def self.create(listing)
    return false unless is_url?(listing[:image_url])
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

  def self.is_url?(url)
    url =~ /\A#{URI::regexp(['http', 'https'])}\z/
  end

end
