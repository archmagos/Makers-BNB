require 'pg'

class DatabaseHandler
  def self.create(listing)
    result = DatabaseConnection.query("INSERT INTO listings (title, price, description)
        VALUES('#{listing[:title]}','#{listing[:price]}','#{listing[:description]}')")

  end
end
