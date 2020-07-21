import { MARS_ROVER } from '../_shared/Constants/Router'

import MarsRoverCamera from '../pages/MarsRover/Camera'

export const MarsRoverRouter = [
  {
    path: `${MARS_ROVER}/:cameraType`,
    component: MarsRoverCamera,
    exact: false,
    name: 'Mars Rover Camera',
    menu: false
  }
]