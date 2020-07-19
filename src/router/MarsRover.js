import { MARS_ROVER_CAMERA } from '../_shared/Constants/Router'

import MarsRoverCamera from '../pages/MarsRover/Camera'

export const MarsRoverRouter = [
  {
    path: `${MARS_ROVER_CAMERA}/:cameraType`,
    component: MarsRoverCamera,
    exact: false,
    name: 'Mars Rover Camera',
    menu: false
  },
]