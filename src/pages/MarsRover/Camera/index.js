import React from 'react'
import { useParams } from 'react-router-dom'

const MarsRoverCamera = ({ match }) => {
  const { cameraType } = useParams()
  console.log(match)
  return (
    <div id="mars-rover-camera-page">
      <h2>mars rover camera</h2>

      <h3>camera: {cameraType}</h3>
    </div>
  )
}

export default MarsRoverCamera