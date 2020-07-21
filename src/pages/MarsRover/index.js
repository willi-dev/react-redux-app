import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { MarsRoverRouter } from '../../router'
import { MARS_ROVER } from '../../_shared/Constants/Router'

const listCamera = ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam', 'pancam', 'minites']

const MarsRover = props => {
  return (
    <div id="mars-rover-page">
      <h1>Mars Rovers Photos</h1>
      <h2>Camera: </h2>
      <ul style={{ display: `inline-block`, listStyle: `none`, paddingLeft: 0}}>
        {
          listCamera.map((camera, index) => 
            <li key={index} style={{ display: `inline-block`, padding: `0 10px`}}>
              <Link to={`${MARS_ROVER}/${camera}`}>{camera.toUpperCase()}</Link>
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
      </Switch>
    </div>
  )
}

export default MarsRover