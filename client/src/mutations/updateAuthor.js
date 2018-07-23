import gql from 'graphql-tag';

export default gql`
  mutation updateAuthor($id: ID!, $name: String!, $age: Int) {
    updateAuthor(id: $id, name: $name, age: $age) {
      author {
        name
        id
        age
      }
    }
  }
`;
