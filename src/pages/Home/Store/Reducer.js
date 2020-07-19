import { FETCH_MARS_ROVER_ALL_START, FETCH_MARS_ROVER_ALL_SUCCESS, FETCH_MARS_ROVER_ALL_ERROR } from './Action'

const initialState = {
  data: null,
  loading: false,
  error: null
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MARS_ROVER_ALL_START:
      return {
        ...state,
        loading: true,
        data: null,
        error: null
      }
    case FETCH_MARS_ROVER_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case FETCH_MARS_ROVER_ALL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: 
      return state
  }
}

export default homeReducer