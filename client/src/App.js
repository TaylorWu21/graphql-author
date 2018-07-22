import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Authors from './components/Authors';
import Author from './components/Author';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Authors} />
      <Route path='/authors/:id' component={Author} />
      <Route render={() => <div>404</div>} />
    </Switch>
  </Router>
)

export default App;
