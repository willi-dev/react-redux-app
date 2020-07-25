import axios from 'axios'

export const FETCH_MARS_ROVER_ALL_START = 'FETCH_MARS_ROVER_ALL_START'
export const FETCH_MARS_ROVER_ALL_SUCCESS = 'FETCH_MARS_ROVER_ALL_SUCCESS'
export const FETCH_MARS_ROVER_ALL_ERROR = 'FETCH_MARS_ROVER_ALL_ERROR'

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-9&api_key=H0DRNQPKusaUaxrQelab2CkKhsFpfoer9zgTOnoy&page=1`

/**
 * fetchMarsRoverAll
 */
export const fetchMarsRoverAll = () => {
  return async(dispatch, getState) => {
    dispatch(fetchMarsRoverAllStart())
    axios.get(url)
      .then( 
        response => dispatch(fetchMarsRoverAllSuccess(response.data.photos))
      )
      .catch( 
        error => dispatch(fetchMarsRoverAllError(error.response.data)) 
      )
  }
}

/**
 * fetchMarsRoverAllStart
 */
const fetchMarsRoverAllStart = () => ({ type: FETCH_MARS_ROVER_ALL_START })

/**
 * fetchMarsRoverAllSuccess
 * @param {*} data 
 */
const fetchMarsRoverAllSuccess = data => ({ type: FETCH_MARS_ROVER_ALL_SUCCESS, payload: data })

/**
 * fetchMarsRoverAllError
 * @param {*} error 
 */
const fetchMarsRoverAllError = error => ({ type: FETCH_MARS_ROVER_ALL_ERROR, payload: error })

const initialState = {
  data: null,
  loading: false,
  error: null
}

/**
 * reducer
 */
const marsRoverAllReducer = (state = initialState, action) => {
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

export default marsRoverAllReducer