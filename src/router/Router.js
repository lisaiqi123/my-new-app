
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
 
import Home from '../pages/home/Home';
import Test from '../pages/test/Test';
import Member from '../pages/merber/Member';
 
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/home" component={Home} />
                     <Route path="/test" component={Test} />
                     <Route path="/member/:id" component={Member} />
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);
 
export default Root;