import { HOME, MARS_ROVER, DETAIL_PHOTO, ABOUT } from '../_shared/Constants/Router'

import Home from '../pages/Home'
import MarsRover from '../pages/MarsRover'

export const AppRouter = [
  {
    path: HOME,
    component: Home,
    exact: true,
    name: 'Home',
    menu: true
  },
  {
    path: MARS_ROVER,
    component: MarsRover,
    exact: false,
    name: 'Mars Rover',
    menu: true,
  }
]