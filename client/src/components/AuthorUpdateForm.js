import React, { Component } from 'react';
import {
  Form,
  Input
} from 'semantic-ui-react';
import { Mutation } from 'react-apollo';

import updateAuthor from '../mutations/updateAuthor';

class AuthorUpdateForm extends Component {
  state = { name: '', age: '' }

  componentDidMount() {
    this.setState({ ...this.props.author });
  }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

  handleSubmit = (updateAuthor) => {
    const { name, age, id } = this.state;

    updateAuthor({
      variables: { id, name, age: parseInt(age) },
      optimisticResponse: {
        __typename: "Mutation",
        updateAuthor: {
          __typename: 'Author',
          author: {
            __typename: 'Author',
            id,
            name,
            age,
          }
        }
      }
    })
    .then( () => {
      this.props.toggleEdit();
    })
  }

  render() {
    const { name, age } = this.state;

    return (
      <Mutation mutation={updateAuthor}>
        {(updateAuthor, { data }) => (
          <Form onSubmit={() => this.handleSubmit(updateAuthor)}>
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

export default AuthorUpdateForm;
