if ENV['RACK_ENV'] != 'production'
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new :spec

  task default: [:spec]
end

require 'pg'

task :build do
  print "☠️  Setting up databases. Please standby...\n"

  ['piratesbnb', 'piratesbnb_test'].each do |database|
    con = PG.connect

    con.exec("CREATE DATABASE #{database};")

    con = PG.connect(dbname: "#{database}")

    con.exec('CREATE TABLE listings(id SERIAL PRIMARY KEY, title VARCHAR(140), price INT, description VARCHAR(320), image_url VARCHAR(125), rating INT, capacity INT);')

    print "☠️  Database '#{database}' has been set up.\n"
  end

  print "☠️  All of your databases have been set up. Have a nice day. \n"
end

task :teardown do
  print "☠️  Are you sure you want to nuke the databases? Type 'y' to confirm.\n"
  confirm = STDIN.gets.chomp
  return unless confirm == 'y'

  ['piratesbnb', 'piratesbnb_test'].each do |database|
    con = PG.connect
    con.exec("DROP DATABASE #{database}")
    print "☠️  Database '#{database}' has been nuked.\n"
  end
  print "☠️  All of your databases have been nuked. Have a nice day.\n"
end

task :setup_test_database do
  print "☠️  Cleaning database tables. Please standby...\n"

  con = PG.connect dbname: 'piratesbnb_test'

  con.exec 'TRUNCATE listings'
  print "☠️  Your database tables are ready for action. Happy pirating.\n"
end
