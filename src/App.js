import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import json from "./data.json"
function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={json.data}/>
    </div>
  );
}

export default App;
