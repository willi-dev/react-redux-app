import { HOME, MARS_ROVER, DETAIL_PHOTO, ABOUT } from '../_shared/Constants/Router'

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import About from '../pages/About'
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
  },
  {
    path: DETAIL_PHOTO,
    component: Detail,
    exact: true,
    name: 'Detail',
    menu: false
  },
  {
    path: ABOUT,
    component: About,
    exact: false,
    name: 'About',
    menu: false
  }
]