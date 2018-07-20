class Mutations::DeleteBook < Mutations::BaseMutation
  null true

  argument :id, ID, required: true

  field :book, BookType, null: true
  field :errors, [String], null: false

  def resolve(id:)
    book = Book.find(id)
    book.destroy
    {
      book: book,
      errors: []
    }
  end
end