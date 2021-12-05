import React from 'react';

import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <Header />
        <h1>Hello World</h1>
        <GlobalStyle />
    </div>
  );
}

export default App;
