import React, { Component } from 'react';
import {
  Query
} from 'react-apollo';
import {
  Segment,
  Dimmer,
  Loader,
  Container,
  Header,
  Card,
  Button
} from 'semantic-ui-react';

import query from '../queries/getAuthor';

class Author extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <Query
        query={query}
        variables={{ id }}
      >
        {({ loading, error, data }) => {
          if (loading) return(
            <Segment>
              <Dimmer active>
                <Loader />
              </Dimmer>
            </Segment>
          );

          if (error) return <p>{error}</p>;

          const { name, age, books } = data.author;

          return (
            <Container>
              <Button onClick={this.props.history.goBack}>Back</Button>
              <Header as='h1'>{name}</Header>
              <Header>Age: {age}</Header>
              <Card.Group centered>
              {
                books.map(({ id, title, genre }) => (
                  <Card key={id}>
                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <Card.Description>{genre}</Card.Description>
                    </Card.Content>
                  </Card>
                ))
              }
              </Card.Group>
            </Container>
          );
        }}
      </Query>
    )
  }
}

export default Author;
