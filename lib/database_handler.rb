require 'pg'
require 'json'

class DatabaseHandler
  def self.create(listing)
    result = DatabaseConnection.query("INSERT INTO listings (title, price, description)
        VALUES('#{listing[:title]}','#{listing[:price]}','#{listing[:description]}')")
  end

  def self.all
    result = DatabaseConnection.query("SELECT * FROM listings")
    result.map { |listing| listing }.to_json
  end
end
