import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from './Game';

class Main extends Component {

   render() {
      const HomePage = () => {
         return (
            <Home />
         );
      };

      return (
         <div>
            <Header />
            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/about' component={About} />
               <Route exact path='/play' component={Game} />
               <Redirect to='/home' />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default Main;
