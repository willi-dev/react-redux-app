import React from 'react'
import PhotoCard from './PhotoCard'

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
            <PhotoCard {...data} key={index} />
          )
        })
      )
    }
  </>    
)

export default ListPhotos