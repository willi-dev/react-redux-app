import React from 'react'
import { Route } from 'react-router-dom'
import { AppRouter } from './router'
import Menu from './_shared/Components/Menu'
import './App.css'

// import Error404 from './pages/Error/Error404'

function App() {
  return (
    <div className="App flex flex-wrap mb-4">
    <Menu router={AppRouter.filter( data => data.menu )}/>
    {
      AppRouter.map((route, index) => 
        <Route path={route.path} component={route.component} exact={route.exact} key={index} />
      )
    }
    {/* <Route path="*" component={Error404} /> */}
    </div>
  );
}

export default App;
