class Mutations::CreateBook < Mutations::BaseMutation
  null true

  argument :author_id, ID, required: true
  argument :title, String, required: false
  argument :genre, String, required: false

  field :book, BookType, null: true
  field :errors, [String], null: false

  def resolve(author_id:, title:, genre:)
    book = Book.new(title: title, genre: genre, author_id: author_id)
    if book.save
      # Successful creation, return the created object with no errors
      {
        book: book,
        errors: [],
      }
    else
      # Failed save, return the errors to the client
      {
        book: nil,
        errors: book.errors.full_messages
      }
    end
  end
end