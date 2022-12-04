p "Started seeding"

User.destroy_all

5.times{User.create!(name: Faker::Name.unique.name, age: rand(18..25))}

p 'Done seeding'