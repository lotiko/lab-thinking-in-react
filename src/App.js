import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import json from "./data.json";
import 'bulma/css/bulma.min.css';
function App() {
  return (
    <div className="App">
      <FilterableProductTable products={json.data}/>
    </div>
  );
}

export default App;
