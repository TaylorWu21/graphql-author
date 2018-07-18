class Mutations::UpdateAuthor < Mutations::BaseMutation
  null true

  argument :id, ID, required: true
  argument :name, String, required: true
  argument :age, Integer, required: false

  field :author, AuthorType, null: true
  field :errors, [String], null: false

  def resolve(id:, name:, age:)
    author = Author.find(id)
    if author.update(name: name, age: age)
      # Successful update, return the created object with no errors
      {
        author: author,
        errors: [],
      }
    else
      # Failed update, return the errors to the client
      {
        author: nil,
        errors: author.errors.full_messages
      }
    end
  end
end
