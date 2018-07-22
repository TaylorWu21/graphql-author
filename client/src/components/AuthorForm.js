import React, { Component } from 'react';
import {
  Form,
  Input
} from 'semantic-ui-react';
import { Mutation } from 'react-apollo';
import mutation from '../mutations/addAuthor';
import query from '../queries/getAuthors';

class AuthorForm extends Component {
  state = { name: '', age: '' }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

  handleSubmit = (addAuthor) => {
    const { name, age } = this.state;

    addAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query }]
    });
    this.setState({ name: '', age: '' });
  }

  render() {
    const { name, age } = this.state;

    return (
      <Mutation mutation={mutation}>
        {(addAuthor, { data }) => (
          <Form onSubmit={() => this.handleSubmit(addAuthor)}>
            <Form.Field
              label='Name'
              placeholder='Name'
              name='name'
              onChange={this.handleChange}
              value={name}
              control={Input}
            />

            <Form.Field
              label='Age'
              placeholder='Age'
              name='age'
              onChange={this.handleChange}
              value={age}
              control={Input}
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        )}
      </Mutation>
    )
  }
}

export default AuthorForm;
