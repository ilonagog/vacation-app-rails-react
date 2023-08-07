# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

d1 = Destination.create(name: "Treehouse in Moretown", location: "Moretown, Vermont, United States", image: "https://a0.muscache.com/im/pictures/5787ccf3-f123-4d8e-af50-e6a418a3f7cc.jpg?im_w=960", description: "Lilla Rustica is an elevated cabin among the trees.  Private, with Stunning views this was built by The Tree House Guys a local Vermont company whom can be found having a season on the DIY network.  Tons of detail, while keeping the design natural and simple.  Unbelievable views of Camels hump State park. A loft with one queen bed and downstairs has a queen bed with three sides of the bed having windows facing the views.  Hiking offered right from the cabin.", price: "224")
d2 = Destination.create(name: "Home in Big Sky", location: "Big Sky, Montana, United States", image: "https://a0.muscache.com/im/pictures/47680c8b-b782-4b62-a532-bfd33200b919.jpg?im_w=1200", description: "Featured in 2023 as one of AirBnB's most wishlisted ski homes! Custom-built house with breathtaking view of Lone Peak.  Stacking windows that open to the spacious deck with hot tub, grill and slide for the kids! Indoor and outdoor fireplace. Open floor plan with 25' vaulted ceilings. One-of-a-kind custom bunk beds. 1 mile drive to Big Sky parking lot and .3 mile ski/walk down to White Otter 2 lift from house", price: "599")
d3 = Destination.create(name: "Home in Moss Beach", location: "Moss Beach, California, United States", image: "https://a0.muscache.com/im/pictures/616bc395-644d-4089-b2c1-13c6c11c50fd.jpg?im_w=1200", description: "Your beachfront escape awaits you.Come immerse yourself in the serenity of this Pacific Ocean retreat gracefully set in a secluded beach just 25 mins south of San Francisco.", price: "1,171 
")

u1 = User.create!(username: "ilona", password: "123")
u2 = User.create!(username: "sophia", password: "456")
u3 = User.create!(username: "ilia", password: "789")


r1 = Review.create(review: "This place is fantastic. The view and the treehouse were equally amazing. We'll be back!", rating: 5, user_id: u1.id, destination_id: d1.id)
r2 = Review.create(review: "Gorgeous location, great house! Perfect for two families.", rating: 5, user_id: u2.id, destination_id: d2.id)
r3 = Review.create(review: "Absolutely stunning, private getaway. Beach access, views and easy to get to restaurants, hikes etc. It was a lovely stay for my husband and me, and would be suitable for a few couples or a family as well.", rating: 5, user_id: u3.id, destination_id: d3.id)