import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import { useQuery } from 'jsonapi-react'

function App() {

  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  console.log(users);

  const {data} = useQuery('/users');

  console.log(data)

 console.log(useQuery('users'))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
