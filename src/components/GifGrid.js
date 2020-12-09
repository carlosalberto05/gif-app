import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  // useEffect(() => {
  //   getGifs(category).then(setImages)
  // }, [category])

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {images.map((item) => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default GifGrid
