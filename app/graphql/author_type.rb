class AuthorType < GraphQL::Schema::Object
  field :id, ID, null: true
  field :name, String, null: true
  field :age, Integer, null: true
  field :books, [BookType], null: true
end