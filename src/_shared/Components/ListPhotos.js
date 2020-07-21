import React from 'react'

const ListPhotos = ({ homeDataLoading, homeData }) => (
  <>
    {
      homeDataLoading && (
        <div className="w-full min-h-screen px-3 py-3">
          <div style={{
            position: `absolute`,
            left: `50%`,
            top: `50%`,
            transform: `translate(-50%, -50%)`
          }}>
          Loading...
          </div>
        </div>
      )
    }
    {
      (homeData !== null && homeData.length) > 0 && (
        homeData.map( (data, index) => {
          return (
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 px-3 py-3" key={index}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={data.img_src} alt={data.camera.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{data.camera.name}</div>
                  <p className="text-gray-700 text-base">
                    {data.camera.full_name} <br/>
                    Earth Date: {data.earth_date} <br/>
                    Rover: {data.rover.name}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {data.rover.status}
                  </span>
                </div>
              </div>
            </div>
          )
        })
      )
    }
  </>    
)

export default ListPhotos