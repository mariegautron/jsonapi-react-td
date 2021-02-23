import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiClient, ApiProvider } from 'jsonapi-react'
import schema from './schema'
import { makeServer } from "./server"

const client = new ApiClient(
  {url: 'http://localhost:3000/api'},
  {
    users: {
      type: 'user',
      fields: {
        name: 'string'
      }
    }
  }
)

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const Root = (
  <ApiProvider client={client}>
    <App />
  </ApiProvider>
)
  

ReactDOM.render(
  Root,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
