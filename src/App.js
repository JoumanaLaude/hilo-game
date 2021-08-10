import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "HiLo Card Game"
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-bg">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
