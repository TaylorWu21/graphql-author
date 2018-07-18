class Types::MutationType < Types::BaseObject
  field :create_author, mutation: Mutations::CreateAuthor
  field :update_author, mutation: Mutations::UpdateAuthor
  field :delete_author, mutation: Mutations::DeleteAuthor
end
