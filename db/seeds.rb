10.times do
  author = Author.create name: Faker::Book.author, age: Faker::Number.between(12, 100)

  5.times do
    author.books.create title: Faker::Book.title, genre: Faker::Book.genre
  end
end
