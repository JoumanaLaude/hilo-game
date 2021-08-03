import React, { Component } from 'react';
import Header from './Header';
import Start from './Start';
import About from './About';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

   render() {
      const PlayGame = () => {
         return (
            <Start />
         );
      };

      return (
         <div>
            <Header />
            <Switch>
               <Route path='/play' component={PlayGame} />
               <Route exact path='/about' component={About} />
               <Redirect to='/play' />
            </Switch>
         </div>
      );
   }
}

export default Main;
