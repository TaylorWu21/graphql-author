class Mutations::DeleteAuthor < Mutations::BaseMutation
  null true

  argument :id, ID, required: true

  field :author, AuthorType, null: true
  field :errors, [String], null: false

  def resolve(id:)
    author = Author.find(id)
    author.destroy

    {
      author: author,
      errors: []
    }
  end
end