class Types::QueryType < Types::BaseObject
  description "root query"

  field :authors, [AuthorType], null: true do
    description "gets all authors"
  end

  def authors
    Author.all
  end
end
