import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





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
        
            <App />
        
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
