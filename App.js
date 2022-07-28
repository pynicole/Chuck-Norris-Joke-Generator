import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import "./index.css"

const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
  const [ joke, setJoke ] = useState('');

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
    generateJoke();
  }, [])

  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generator</h2>
      <p dangerouslySetInnerHTML={{__html: joke}} />
      <button onClick={generateJoke}>Get new joke 😂</button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;