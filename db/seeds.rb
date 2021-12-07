# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Arbiter.destroy_all
Team.destroy_all
Court.destroy_all
Arbiter.reset_pk_sequence
Team.reset_pk_sequence
Court.reset_pk_sequence

bobby= Arbiter.create(name: "bobby", rate: 5, email: "bob@yahoo.com", phone_number: "8122230816")
ale= Arbiter.create(name: "ale", rate: 60, email: "ale@gmail.com", phone_number: "3030300307")
will= Arbiter.create(name: "will", rate: 30, email: "will@gmail.com", phone_number: "2150300307")    
puts "Arbiter added"
bullhogs= Team.create(name: "bullhogs", email: "bullhogs@gmail.com")
walnuts=Team.create(name: "walnuts", email: "walnuts@gmail.com")
wonkies= Team.create(name: "wonkies", email: "wonkies@gmail.com")
puts "We have teams"