def create_user
  user = User.create!(
  email: Faker::Internet.email,
  password: "passWord123!",
  password_confirmation: "passWord123!",
  rank: 1200
  )

  puts "email: #{user.email}, password: passWord123!"
end

2.times { create_user }





