class AuthorType < GraphQL::Schema::Object
  field :id, ID, null: true
  field :name, String, null: true
  field :age, Integer, null: true
  field :books, [Types::BookType], null: true
end