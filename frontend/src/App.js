import React from 'react';
import './App.css';
import Main from './Containers/Main';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
