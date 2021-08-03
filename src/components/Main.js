import React, { Component } from 'react';
import Header from './Header';
import Start from './Start';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from './Game';

class Main extends Component {

   render() {
      const HomePage = () => {
         return (
            <Start />
         );
      };

      return (
         <div>
            <Header />
            <Switch>
               <Route path='/about' component={HomePage} />
               <Route exact path='/play' component={Game} />
               <Redirect to='/about' />
            </Switch>
         </div>
      );
   }
}

export default Main;
