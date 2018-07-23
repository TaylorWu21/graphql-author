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
import AuthorUpdateForm from './AuthorUpdateForm';

class Author extends Component {
  state = { edit: false };

  toggleEdit = () => this.setState({ edit: !this.state.edit });

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
              {
                this.state.edit?
                  <AuthorUpdateForm toggleEdit={this.toggleEdit} author={data.author} />
                :
                  <div>
                    <Header as='h1'>{name}</Header>
                    <Header>Age: {age}</Header>
                    <Button onClick={this.toggleEdit}>Edit</Button>
                  </div>
              }
              
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
