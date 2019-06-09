import React, { useState, useEffect } from 'react'
import Card from '../common/Card'
import { getTopGenres } from '../../utils/fetch';
import './styles.css'


const renderGenres = (genres) => {
  return genres.map(genre => {
    return <div key={genre} className='top-genre'>{genre}</div>
  })
}

export default ({className}) => {
  const [topGenres, setTopGenres] = useState([])

  useEffect(() => {
    getTopGenres()
      .then(genres => {
        setTopGenres(genres)
      })
  }, [])

  const title = 'Your Top Genres'
  const content = topGenres.length <= 0 ? <div>Loading...</div> : renderGenres(topGenres) 
  return (
    <Card className={className} title={title} content={content} />
  )
}