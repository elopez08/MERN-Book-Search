import React from 'react';
//This contrains bindings using React Router for web applications
//If you look at the App(), you'll notice that there are Router, Switch, and Route defined in green.  This is the cause of it:
//First we want to connect the app to the Browser's URL.  This is done with:  BrowserRouter
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//get the apolloserver
import {ApolloProvider} from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';
//import the pages from the pages folder, each individually
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

//Initialize ApolloClient, passing its constructor a configuration object with the uri and cache
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? 'Bearer ${token}' : "",
      },
    });
  },
  //We're going to use the "graphql" as required
  uri: "/graphql",
});

//When we provided the ApolloProvider, we need to wrap it around
function App() {
  return (
    <ApolloProvider client ={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>

  );
}

export default App;
