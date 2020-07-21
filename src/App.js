import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppRouter } from './router'
import Menu from './_shared/Components/Menu'
import './App.css'

function App() {
  return (
    <div className="App flex flex-wrap mb-4">
    <Menu router={AppRouter.filter( data => data.menu )}/>
    <Switch>
      {
        AppRouter.map((route, index) => 
          <Route path={route.path} component={route.component} exact={route.exact} key={index} />
        )
      }
    </Switch>
    </div>
  );
}

export default App;
