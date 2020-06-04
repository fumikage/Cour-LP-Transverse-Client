import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from "react-redux";


const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

client.query({
    query: gql`
    query Assert{
      astronautSchemaAssert
    } 
    `
  })
  .then(result => console.log("Reponse from graphql:", result));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client= { client }>
        <Provider store={store}>
            <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
