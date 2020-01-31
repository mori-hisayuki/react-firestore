import React from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase/index";

const App: React.FC = () => {

  const docRef = firestore.collection("sample-store").doc("testDoc");
  docRef.get().then( doc => {
    console.log("Success: Document has written");
    console.log(doc.data());
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aaa
        </a>
      </header>
    </div>
  );
}

export default App;
