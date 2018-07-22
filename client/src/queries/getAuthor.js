import gql from 'graphql-tag';

export default gql`
  query getAuthor($id: ID!) {
    author(id: $id) {
      id
      name
      age
      books {
        id
        title
        genre
      }
    }
  }
`;
