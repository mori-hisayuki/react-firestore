import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FireBase } from "./firebase/index";

const App: React.FC = () => {

  // 参照系
  const docRef = FireBase.instance.firestore.collection("sample-store").doc("testDoc");
  docRef.get().then( doc => {
    console.log("Success: Document has written");
    console.log(doc.data());
  })

  //登録系
  FireBase.instance.firestore
    .collection("users")
    .add({
      country: "Japan",
      name: "dummyUser1"
    })
    .then(() => {
      console.log("Success: Document has written");
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });

  //更新系
  FireBase.instance.firestore
      .collection("users")
      .doc("dummy_user_1")
      .set({
        country: "Japan",
        name: "dummyUser2",
        testcollection: [
          { item: "a" },
          {item: "b"}
        ]
      })
      .then(() => {
        console.log("Success: Document has written");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });

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
