import React from 'react';
import './App.scss';
import { HomePage } from './components/templates/HomePage';
import { useFetch } from './hooks/useFetch';

function App() {

  const url = 'http://hp-api.herokuapp.com/api/characters';

  const { data, loading = true, error } = useFetch(url);

  console.log(data, loading, error);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
