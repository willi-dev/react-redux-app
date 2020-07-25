import React from 'react'

const PhotoCard = ({ img_src, camera, earth_date, rover }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img_src} alt={camera.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{camera.name}</div>
          <p className="text-gray-700 text-base">
            {camera.full_name} <br/>
            Earth Date: {earth_date} <br/>
            Rover: {rover.name}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {rover.status}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard