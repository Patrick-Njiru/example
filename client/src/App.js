import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/users').then(res => res.json()).then(setUsers)
    //   if (res.ok) {
    //     res.json().then(setUsers)
    //   } else {
    //     res.json().then(message => setErrors(message.error))
    //   }
    // })
  }, [])

  console.log(users);

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
        </a> <br />
        <code>My code</code>
        <ol>
          {users.map( user => <li key={user.id}>{user.name}</li>)}
        </ol>

      </header>
    </div>
  );
}

export default App;
