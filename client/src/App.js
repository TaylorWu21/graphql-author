import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Authors from './components/Authors';
import Author from './components/Author';
import AuthorNew from './components/AuthorNew';
import BookNew from './components/BookNew';
import Book from './components/Book';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Authors} />
      <Route exact path='/authors/new' component={AuthorNew} />
      <Route path='/authors/:id' component={Author} />
      <Route path='/books/:id' component={Book} />
      <Route path='/authors/:id/books/new' component={BookNew} />
      <Route render={() => <div>404</div>} />
    </Switch>
  </Router>
)

export default App;
