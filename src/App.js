import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import background from './css/bg.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
