# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'nokogiri'

url = 'https://www.houseofplants.co.uk/indexofplants.php'
html_file = open(url).read
html_doc = Nokogiri::HTML(html_file)

html_doc.search('.product-inner-box').first(10).each do |element|
  latin = element.search('.latinName').text.strip
  name = element.search('.commonName').text.strip
  description = element.search('.description').text.strip

  Plant.create(name: name, latin: latin, description: description)
end
