import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Launches from './components/Launches';
import Launch from './components/Launch'

import './App.css';
import logo from './SpaceX_Logo_Black.png'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="spacex logo" style={{
              width: 300,
              display: 'block',
              margin: '1rem auto'
            }} />
          </Link>
          <Switch>
            <Route exact path="/">
              <Launches />
            </Route>
            <Route exact path="/launch/:flight_number">
              <Launch />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
