import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { MarsRoverRouter } from '../../router'
import { MARS_ROVER_CAMERA } from '../../_shared/Constants/Router'

const listCamera = ['fhaz', 'rhaz', 'mast', 'navcam']

const MarsRover = props => {
  return (
    <div id="mars-rover-page">
      <h1>Mars Rovers Photos</h1>
      <ul style={{ display: `inline-block`, listStyle: `none`}}>
        {
          listCamera.map((camera, index) => 
            <li key={index} style={{ display: `inline-block`, padding: `0 10px`}}>
              <Link to={`${MARS_ROVER_CAMERA}/${camera}`}>{camera.toUpperCase()}</Link>
            </li>
          )
        }
      </ul>
      <Switch>
        {
          MarsRoverRouter.map((route, index) => 
            <Route path={route.path} component={route.component} exact={route.exact} key={index} />
          )
        }
        <Route component={MarsRoverRouter[0].component} />
      </Switch>
    </div>
  )
}

export default MarsRover