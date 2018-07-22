import gql from "graphql-tag";

export default gql`
  mutation createAuthor($name: String!, $age: Int) {
    createAuthor(name: $name, age: $age) {
      author {
        name
        id
        age
      }
    }
  }
`;
