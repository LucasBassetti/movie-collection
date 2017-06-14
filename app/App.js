import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
 HashRouter as Router,
 Route,
 Switch,
} from 'react-router-dom';
import reducers from './reducers';
import { Header, Main } from './components';
import { MovieDetails, Movies, MovieForm } from './containers';

const store = createStore(reducers);

require('./styles/base.css');

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Movies} />
              <Route path="/movies/:id" component={MovieDetails} />
              <Route path="/new-movie" component={MovieForm} />
              <Route path="/edit-movie/:id" component={MovieForm} />
              <Route component={Movies} />
            </Switch>
          </Main>
        </div>
      </Router>
    </Provider>
  );
}
