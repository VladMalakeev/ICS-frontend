import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "@apollo/client";
import { client } from "./graphql.settings";


ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
