import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMarsRoverAll } from './Store/Action'
import ListPhotos from '../../_shared/Components/ListPhotos'

const Home = () => {
  const firstRender = useRef(true)
  const dispatchAction = useDispatch()
  const homeDataState = useSelector( state => ({
    homeDataLoading: state.home.loading,
    homeData: state.home.data,
    homeDataError: state.home.error
  }))

  useEffect(() => {
    if (firstRender.current) {
      dispatchAction(fetchMarsRoverAll())
      firstRender.current = false
    }
  }, [dispatchAction])

  return (
    <div id="home" className="flex flex-wrap">
      <ListPhotos {...homeDataState} />
    </div>
  )
}

export default Home