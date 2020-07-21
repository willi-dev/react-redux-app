import { HOME, MARS_ROVER,  } from '../_shared/Constants/Router'

import Home from '../pages/Home'
import MarsRover from '../pages/MarsRover'
import Error404 from '../pages/Error/Error404'

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
  },
  {
    path: false,
    component: Error404,
    exact: false,
    name: 'Not Found',
    menu: false
  }
]