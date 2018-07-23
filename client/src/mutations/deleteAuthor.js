import gql from 'graphql-tag';

export default gql`
  mutation deleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      author {
        name
        id
      }
    }
  }
`;
